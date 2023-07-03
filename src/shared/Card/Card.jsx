// import React from 'react';
import { FaBookReader, FaUserGraduate } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";

const Card = ({ item }) => {
  return (
    <div className="border bg-white dark:bg-transparent shadow transform hover:scale-95 hover:shadow-xl duration-200 rounded-2xl">
      <div className="card">
        <figure>
          <img src={item.image} loading="lazy" alt="Shoes" />
        </figure>
        <div className="card-body text-start">
          <h2 className="card-title text-2xl font-extrabold capitalize">
            <span className="text-[#c25934]">{item.name.split(" ")[0]}</span>
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
          <div className="card-actions">
            <button className="btn btn-primary">Book a class</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
