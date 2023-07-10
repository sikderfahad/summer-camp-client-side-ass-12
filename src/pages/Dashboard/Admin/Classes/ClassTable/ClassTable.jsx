// import React from 'react';

import { AwesomeButton } from "react-awesome-button";
import styles from "./Button.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../../../../../router/router";
import { ToastMsgSuc } from "../../../../../components/Toast/ToastMsg";

const ClassTable = ({ allClass, refetch }) => {
  const changeUserRole = (id, status, name) => {
    const newStatus = status.status;
    Swal.fire({
      title: "Are you sure?",
      text: `Make this class will ${newStatus}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make ${newStatus}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`${baseUrl}/all-added-classes/${id}`, status)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              const msg = `Now ${name} is ${newStatus}`;
              ToastMsgSuc(msg);
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-[--registerBtnBg]  font-semibold text-xl">
            <tr className="py-6">
              <th></th>
              <th className="capitalize">class image</th>
              <th className="capitalize">class name</th>
              <th className="capitalize">ins. name</th>
              <th className="capitalize">ins. email</th>
              <th className="capitalize">available seats</th>
              <th className="capitalize">price</th>
              <th className="capitalize">status</th>
              <th className="capitalize text-center">action</th>
            </tr>
          </thead>

          <tbody className="text-center text-lg">
            {allClass &&
              allClass?.map((userClass, index) => (
                <tr key={index}>
                  <th>
                    <span>{index + 1}</span>
                  </th>

                  <td>
                    <img
                      className="w-[100px] h-[100px] rounded-lg"
                      src={userClass?.image}
                      alt=""
                    />{" "}
                  </td>

                  <td>
                    <p className="">{userClass?.name}</p>
                  </td>

                  <td>
                    <p className="">{userClass?.instructor} </p>
                  </td>

                  <td>
                    <span className="">{userClass?.instructorEmail}</span>
                  </td>

                  <td>
                    <span className="">{userClass?.availableSeats}</span>
                  </td>

                  <td>
                    <span className="">${userClass?.price}</span>
                  </td>

                  <td>
                    <span className="">{userClass?.status}</span>
                  </td>
                  <td>
                    <span className="flex flex-col gap-3">
                      <AwesomeButton
                        // disabled={user?.role === "instructor" && true}
                        onPress={() =>
                          changeUserRole(
                            userClass._id,
                            { status: "approved" },
                            userClass?.name
                          )
                        }
                        type="secondary"
                        className={styles.roleBtn}
                      >
                        Approve
                      </AwesomeButton>

                      <AwesomeButton
                        // disabled={user?.role === "admin" && true}
                        onPress={() =>
                          changeUserRole(
                            userClass._id,
                            { status: "denyed" },
                            userClass?.name
                          )
                        }
                        type="danger"
                        className={styles.roleBtn}
                      >
                        Deny
                      </AwesomeButton>

                      <AwesomeButton
                        // disabled={user?.role === "admin" && true}
                        onPress={() =>
                          changeUserRole(
                            userClass._id,
                            { status: "pending" },
                            userClass?.name
                          )
                        }
                        type="primary"
                        className={styles.roleBtn}
                      >
                        Feedback
                      </AwesomeButton>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>

          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ClassTable;
