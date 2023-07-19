// import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { MdPendingActions } from "react-icons/md";
import { PiWheelchair } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useUserType from "../../hooks/useUserType";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { baseUrl } from "../../router/router";
import Swal from "sweetalert2";
import { useState } from "react";

const Card = ({
  item,
  teacher,
  classPage,
  homePage,
  showFeedbackModal,
  showClassUpdateModal,
}) => {
  const { user } = useAuth();

  const [isDisabled, setIsDisabled] = useState(false);

  const handledFeedbackModal = (feedback) => {
    showFeedbackModal(feedback);
  };

  const handledClassUpdateModal = () => {
    showClassUpdateModal(item);
  };

  const navigate = useNavigate();

  const handleJoin = () => {
    if (homePage) {
      navigate("/classes");
    }
    if (classPage) {
      const { image, name, instructor, instructorEmail, price } = item;
      const bookingClass = {
        image,
        name,
        instructor,
        instructorEmail,
        price,
        studentEmail: user.email,
      };

      Swal.fire({
        title: "Are you sure?",
        text: `You want to booking ${name}!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, select it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(`${baseUrl}/booking-class`, bookingClass).then((res) => {
            if (res.data.insertedId) {
              Swal.fire(
                "Selected!",
                `${name} save to your account.`,
                "success"
              );
              setIsDisabled(true);
            }
            // console.log(res.data);
          });
        }
      });
    }
  };

  const [userType] = useUserType();
  const isAdmin = userType === "admin";
  const isInstructor = userType === "instructor";

  const noSeat = classPage && item.availableSeats === 0;

  return (
    <div>
      <div
        className={`border ${
          noSeat && "bg-red-600"
        } shadow transform hover:scale-95 hover:shadow-xl duration-200 rounded-2xl`}
      >
        <div className="card overflow-hidden">
          <figure>
            <img
              src={item.image}
              className="hover:scale-125 transform duration-300 ease-in"
              loading="lazy"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-start">
            <h2 className="card-title text-2xl font-extrabold capitalize">
              <span className={`${noSeat ? "text-white" : "text-[#c25934]"} `}>
                {item.name.split(" ")[0]}
              </span>
              <span className="text-[#0c4b65]">{item.name.split(" ")[1]}</span>
            </h2>
            <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
              <span className="flex items-center gap-2 ">
                <FaUserGraduate className="text-xl text-[#0c4b65]"></FaUserGraduate>{" "}
                Instructor:
              </span>{" "}
              {item.instructor}
            </h1>
            <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
              <span className="flex items-center gap-2 ">
                <FaBookReader className="text-xl text-[#0c4b65]"></FaBookReader>{" "}
                Students:
              </span>{" "}
              {item.enrolledStudents}
            </h1>
            <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
              <span className="flex items-center gap-2 ">
                <ImPriceTags className="text-xl text-[#0c4b65]"></ImPriceTags>{" "}
                Price:
              </span>{" "}
              {item.price}
            </h1>
            {classPage && (
              <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
                <span className="flex items-center gap-2 ">
                  <PiWheelchair className="text-xl text-[#0c4b65]"></PiWheelchair>{" "}
                  Available Seat:
                </span>{" "}
                {item.availableSeats}
              </h1>
            )}

            {teacher && (
              <>
                <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
                  <span className="flex items-center gap-2 ">
                    <PiWheelchair className="text-xl text-[#0c4b65]"></PiWheelchair>{" "}
                    Available Seat:
                  </span>{" "}
                  {item.availableSeats}
                </h1>
                <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
                  <span className="flex items-center gap-2 ">
                    <MdPendingActions className="text-xl text-[#0c4b65]"></MdPendingActions>{" "}
                    Status:
                  </span>{" "}
                  {item.status}
                </h1>

                <div className="flex item-center justify-between mt-2">
                  {item?.feedback && (
                    <button
                      onClick={() => handledFeedbackModal(item?.feedback)}
                      className="hover:text-[--primary] duration-200"
                    >
                      View feedback →
                    </button>
                  )}

                  <span onClick={handledClassUpdateModal} className="">
                    <AwesomeButton type="primary">Update class</AwesomeButton>
                  </span>
                </div>
              </>
            )}

            {!teacher && (
              <div className="card-actions">
                <AwesomeButton
                  disabled={
                    (classPage && (isAdmin || isInstructor)) ||
                    noSeat ||
                    isDisabled
                  }
                  onPress={handleJoin}
                  ripple={true}
                  type="primary"
                >
                  JOIN NOW!
                </AwesomeButton>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
