// import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { MdPendingActions } from "react-icons/md";
import { PiWheelchair } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import useUserType from "../../hooks/useUserType";

const Card = ({ item, teacher, classPage, homePage }) => {
  const navigate = useNavigate();
  const handleJoin = () => {
    if (homePage) {
      navigate("/classes");
    }
  };

  const [userType] = useUserType();
  const isAdmin = userType === "admin";
  const isInstructor = userType === "instructor";

  const noSeat = classPage && item.availableSeats === 0;

  return (
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
          <h1 className="text-lg font-bold flex items-center gap-2">
            <span className="flex items-center gap-2 ">
              <FaUserGraduate className="text-xl text-[#0c4b65]"></FaUserGraduate>{" "}
              Instructor:
            </span>{" "}
            {item.instructor}
          </h1>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <span className="flex items-center gap-2 ">
              <FaBookReader className="text-xl text-[#0c4b65]"></FaBookReader>{" "}
              Students:
            </span>{" "}
            {item.enrolledStudents}
          </h1>
          <h1 className="text-lg font-bold flex items-center gap-2">
            <span className="flex items-center gap-2 ">
              <ImPriceTags className="text-xl text-[#0c4b65]"></ImPriceTags>{" "}
              Price:
            </span>{" "}
            {item.price}
          </h1>
          {classPage && (
            <h1 className="text-lg font-bold flex items-center gap-2">
              <span className="flex items-center gap-2 ">
                <PiWheelchair className="text-xl text-[#0c4b65]"></PiWheelchair>{" "}
                Available Seat:
              </span>{" "}
              {item.availableSeats}
            </h1>
          )}

          {teacher && (
            <>
              <h1 className="text-lg font-bold flex items-center gap-2">
                <span className="flex items-center gap-2 ">
                  <PiWheelchair className="text-xl text-[#0c4b65]"></PiWheelchair>{" "}
                  Available Seat:
                </span>{" "}
                {item.availableSeats}
              </h1>
              <h1 className="text-lg font-bold flex items-center gap-2">
                <span className="flex items-center gap-2 ">
                  <MdPendingActions className="text-xl text-[#0c4b65]"></MdPendingActions>{" "}
                  Status:
                </span>{" "}
                {item.status}
              </h1>
            </>
          )}

          {!teacher && (
            <div className="card-actions">
              <AwesomeButton
                disabled={(classPage && (isAdmin || isInstructor)) || noSeat}
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
  );
};

export default Card;
