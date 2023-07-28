// import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import { FaBookReader, FaCalendarCheck, FaUserGraduate } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { MdMail, MdPendingActions } from "react-icons/md";
import { PiWheelchair } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import useUserType from "../../hooks/useUserType";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { baseUrl } from "../../router/router";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import DateDisplay from "../../components/DateDisplay/DateDisplay";
import { ToastMsgWarn } from "../../components/Toast/ToastMsg";
// import useEnrolledClass from "../../hooks/useEnrolledClass";

const Card = ({
  item,
  teacher,
  classPage,
  homePage,
  showFeedbackModal,
  showClassUpdateModal,
  paidClass,
  enrolledClass,
}) => {
  const { user } = useAuth();
  const location = useLocation();

  // const [enrolledClass] = useEnrolledClass();

  const [isDisabled, setIsDisabled] = useState(false);

  const handledFeedbackModal = (feedback) => {
    showFeedbackModal(feedback);
  };

  const handledClassUpdateModal = () => {
    showClassUpdateModal(item);
  };

  const navigate = useNavigate();

  useEffect(() => {
    setIsDisabled(false);
    if (classPage) {
      const isIdMatched = enrolledClass?.find(
        (paidClass) => paidClass.classId === item?._id
      );

      if (isIdMatched) {
        setIsDisabled(true);
        // console.log("check id matched ", isIdMatched);
      }
    }
  }, [classPage, item._id, enrolledClass]);

  const handleJoin = () => {
    if (homePage) {
      navigate("/classes");
    }
    if (classPage) {
      if (!user) {
        Swal.fire({
          title: "Agree for login?",
          text: "You must login to join a class!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, join now!",
        }).then((result) => {
          if (result.isConfirmed) {
            ToastMsgWarn("Please login to continue!");
            return navigate("/login", { state: { from: location.pathname } });
          }
        });
      }

      if (user) {
        const { _id, image, name, instructor, instructorEmail, price } = item;
        const bookingClass = {
          image,
          name,
          instructor,
          instructorEmail,
          price,
          studentEmail: user?.email,
          classId: _id,
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
    }
  };

  const [userType] = useUserType();
  const isAdmin = userType === "admin";
  const isInstructor = userType === "instructor";

  const noSeat = classPage && item.availableSeats === 0;

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
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

            {!paidClass && (
              <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
                <span className="flex items-center gap-2 ">
                  <FaBookReader className="text-xl text-[#0c4b65]"></FaBookReader>{" "}
                  Students:
                </span>{" "}
                {item.enrolledStudents}
              </h1>
            )}

            {paidClass && (
              <>
                <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
                  <span className="flex items-center gap-2 ">
                    <MdMail className="text-xl text-[#0c4b65]"></MdMail> Ins.
                    Email:
                  </span>{" "}
                  {item.instructorEmail}
                </h1>
                <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
                  <span className="flex items-center gap-2 ">
                    <FaCalendarCheck className="text-xl text-[#0c4b65]"></FaCalendarCheck>{" "}
                    Joining date:
                  </span>
                  <DateDisplay date={item.date.split(" ")[0]}></DateDisplay>
                </h1>
              </>
            )}

            <h1 className="text-base md:text-lg font-bold flex items-center gap-2">
              <span className="flex items-center gap-2 ">
                <ImPriceTags className="text-xl text-[#0c4b65]"></ImPriceTags>{" "}
                Price:
              </span>{" "}
              ${item.price}
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

            {!teacher && !paidClass && (
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
