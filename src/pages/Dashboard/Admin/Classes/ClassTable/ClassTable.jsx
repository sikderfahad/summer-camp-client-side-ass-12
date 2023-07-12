// import React from 'react';

import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import styles from "./Button.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { baseUrl } from "../../../../../router/router";
import { ToastMsgSuc } from "../../../../../components/Toast/ToastMsg";
import { useState } from "react";
import Alart from "../../../../../shared/Alart/Alart";
import { useForm } from "react-hook-form";

const ClassTable = ({ allClass, refetch }) => {
  const [classId, setClassId] = useState("");
  const [className, setClassName] = useState("");

  const changeClassStatus = (id, status, name) => {
    // STATUS
    if (status) {
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
    }
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    const feedback = data;
    if (feedback) {
      axios
        .patch(`${baseUrl}/all-added-classes/${classId}`, feedback)
        .then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            const msg = `The ${className} feedback sent! Click outside to continue`;
            ToastMsgSuc(msg);
            refetch();
            reset();
          }
        });
    }
  };

  const handledFeedback = (id, name) => {
    // window.my_modal_2.showModal();
    window.my_modal_2.showModal();
    setClassId(id);
    setClassName(name);
  };
  // console.log(classId, className);
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
                    <span className="capitalize">{userClass?.status}</span>
                  </td>
                  <td>
                    <span className="flex flex-col gap-3">
                      <button
                        className="btn btn-ghost"
                        onClick={() =>
                          changeClassStatus(
                            userClass._id,
                            { status: "pending" },
                            userClass?.name
                          )
                        }
                      >
                        Change
                      </button>
                      <AwesomeButton
                        disabled={
                          userClass?.status === "approved" ||
                          userClass?.status === "denyed"
                        }
                        onPress={() =>
                          changeClassStatus(
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
                        disabled={
                          userClass?.status === "approved" ||
                          userClass?.status === "denyed"
                        }
                        onPress={() =>
                          changeClassStatus(
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
                        onPress={() =>
                          handledFeedback(userClass._id, userClass.name)
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
        </table>

        {/* Compleated Modal and it was worked! */}
        {/* MODAL SECTION */}
        <dialog id="my_modal_2" className="modal">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="modal-box"
          >
            <h3 className="font-bold text-lg">Your Feedback!</h3>
            <div className="mt-10 flex flex-col gap-6">
              <textarea
                name="feedback"
                {...register("feedback", {
                  required: "Coudn't send an empty feedback!",
                })}
                id=""
                className="min-w-full min-h-[300px] shadow-lg p-3 rounded-md border-none outline-none"
              ></textarea>
              {errors.feedback && (
                <Alart msg={errors.feedback?.message}></Alart>
              )}
              <span>
                <AwesomeButtonProgress
                  type="primary"
                  onPress={async (element, next) => {
                    next();
                  }}
                >
                  Send Feedback
                </AwesomeButtonProgress>
              </span>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* MODAL SECTION */}
      </div>
    </div>
  );
};

export default ClassTable;
