// import React from 'react';

import "./UserTable.css";
import { AwesomeButton } from "react-awesome-button";
import styles from "./Button.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastMsgSuc } from "../../../../../components/Toast/ToastMsg";
import { baseUrl } from "../../../../../router/router";
import Spinner from "../../../../../components/Spinner/Spinner";

const UserTable = ({ users, refetch, userLoading }) => {
  // console.log(users);
  if (userLoading) {
    refetch();
  }
  const changeUserRole = (id, role, name) => {
    const newRole = role.role;
    Swal.fire({
      title: "Are you sure?",
      text: `Make this user will ${
        newRole === "instructor" ? "Instructor" : "Admin"
      }`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, make ${
        newRole === "instructor" ? "Instructor" : "Admin"
      }!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`${baseUrl}/users/${id}`, role).then((res) => {
          if (res.data.modifiedCount > 0) {
            const msg = `Now ${name} is ${newRole}`;
            ToastMsgSuc(msg);
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="text-[--registerBtnBg]  font-semibold text-xl">
          <tr className="py-6">
            <th></th>
            <th className="uppercase">Profile</th>
            <th className="uppercase">Name</th>
            <th className="uppercase">Email</th>
            <th className="uppercase">Role</th>
            <th className="uppercase text-center">ACTION</th>
          </tr>
        </thead>
        {!userLoading ? (
          <tbody>
            {users &&
              users?.map((user, index) => (
                <tr key={index}>
                  <th>
                    <span>{index + 1}</span>
                  </th>

                  <td>
                    <img
                      className="w-[100px] h-[100px] rounded-lg"
                      src={user?.photoURL}
                      alt=""
                    />{" "}
                  </td>

                  <td>
                    <p className="text-lg">{user?.displayName}</p>
                  </td>

                  <td>
                    <p className="text-base">{user?.email} </p>
                  </td>

                  <td>
                    <span className="text-lg font-semibold">{user?.role}</span>
                  </td>
                  <td>
                    <span className="flex flex-col gap-3">
                      <AwesomeButton
                        disabled={user?.role === "instructor" && true}
                        onPress={() =>
                          changeUserRole(
                            user._id,
                            { role: "instructor" },
                            user.displayName
                          )
                        }
                        type="primary"
                        className={styles.roleBtn}
                      >
                        Make Instructor
                      </AwesomeButton>
                      <AwesomeButton
                        disabled={user?.role === "admin" && true}
                        onPress={() =>
                          changeUserRole(
                            user._id,
                            { role: "admin" },
                            user.displayName
                          )
                        }
                        type="secondary"
                        className={styles.roleBtn}
                      >
                        Make Admin
                      </AwesomeButton>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <Spinner></Spinner>
        )}
        {/* foot */}
      </table>
    </div>
  );
};

export default UserTable;
