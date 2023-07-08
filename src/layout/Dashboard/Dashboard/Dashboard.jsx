// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";
import { GrClose, GrMenu } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiShoppingBag } from "react-icons/hi";
import { FaBook, FaCalendarAlt, FaUsers } from "react-icons/fa";
import "./Dashboard.css";
import DashboardNavLink from "../DashboardNavLink/DashboardNavLink";
import ToastBox from "../../../components/Toast/ToastBox";
import ModeBtn from "../../../shared/ModeBtn/ModeBtn";
import useUserType from "../../../hooks/useUserType";

// Admin Dashboard Menu
const adminMenu = [
  {
    icon: <FaBook></FaBook>,
    menuName: "manage classes",
    path: "/dashboard/admin/manage-class",
  },
  {
    icon: <FaUsers></FaUsers>,
    menuName: "manage users",
    path: "/dashboard/admin/manage-users",
  },
];

// Instructor Dashboard Menu
const instructorMenu = [
  {
    icon: <AiFillHome></AiFillHome>,
    menuName: "add a class",
    path: "/dashboard/instructor/add-class",
  },
  {
    icon: <FaCalendarAlt></FaCalendarAlt>,
    menuName: "my classes",
    path: "/dashboard/instructor/my-class",
  },
];

// Student Dashboard Menu
const studentMenu = [
  {
    icon: <AiFillHome></AiFillHome>,
    menuName: "my selected classes",
    path: "/dashboard/client-home",
  },
  {
    icon: <FaCalendarAlt></FaCalendarAlt>,
    menuName: "my enrolled classes",
    path: "/client-dashboard/reservation",
  },
];

// Universel dashboard Menu
const defaultMenu = [
  {
    icon: <AiFillHome></AiFillHome>,
    menuName: "home",
    path: "/",
  },
  {
    icon: <GiHamburgerMenu></GiHamburgerMenu>,
    menuName: "classes",
    path: "/classes",
  },
  {
    icon: <HiShoppingBag></HiShoppingBag>,
    menuName: "instractors",
    path: "/instractors",
  },
];

const Dashboard = () => {
  const [userType] = useUserType();

  const isAdmin = userType === "admin";
  const isInstructor = userType === "instructor";
  const isStudent = userType === "student";
  // console.log(userType, isAdmin);

  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content 
        
        "
        >
          {/* Page content here */}

          <div className="lg:hidden flex w-full p-2 justify-between items-center">
            <div className="logo flex flex-col ">
              <img src={"https://i.ibb.co/rfK9GSn/nota-logo.png"} alt="" />
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square drawer-button  p-0"
            >
              <GrMenu className=" text-2xl"></GrMenu>
            </label>
          </div>

          <div className="p-4 lg:py-12 lg:px-8">
            <Outlet></Outlet>
            <ToastBox></ToastBox>
          </div>

          {/* Page content here */}
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="drawer-side border-r-2 w-fit px-8 min-h-full "
        >
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 h-full py-6 grid grid-cols-1 items-center  text-base-content">
            {/* Sidebar content here */}
            <div className="flex gap-4 justify-between items-center">
              {/* Logo */}
              <div className="logo w-fit flex flex-col ">
                <img src={"https://i.ibb.co/rfK9GSn/nota-logo.png"} alt="" />
              </div>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-outline  drawer-button lg:hidden"
              >
                <span className="">
                  <GrClose className="text-2xl"></GrClose>
                </span>
              </label>
            </div>

            {/* Menu Box */}
            <div className="mt-12">
              <ul className="flex flex-col justify-start gap-3">
                {/* ADMIN menu */}

                {isAdmin &&
                  adminMenu.map((menu, idx) => (
                    <DashboardNavLink key={idx} menu={menu}></DashboardNavLink>
                  ))}
                {/* INSTRUCTOR menu */}

                {isInstructor &&
                  instructorMenu.map((menu, idx) => (
                    <DashboardNavLink key={idx} menu={menu}></DashboardNavLink>
                  ))}
                {/* STUDENTS menu */}

                {isStudent &&
                  studentMenu.map((menu, idx) => (
                    <DashboardNavLink key={idx} menu={menu}></DashboardNavLink>
                  ))}
              </ul>
            </div>

            {/* Devider */}
            <hr className="my-6" />

            <div className="">
              <ul className="flex flex-col justify-start gap-3">
                {defaultMenu.map((menu, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active font-bold flex items-center gap-3 uppercase "
                          : "font-bold flex items-center gap-3 uppercase hover:bg-[#5f9ce5]"
                      }
                    >
                      <span className="text-2xl">{menu.icon}</span>
                      <span>{menu.menuName}</span>
                    </NavLink>
                  </li>
                ))}
                <li>
                  <ModeBtn dashboard={true}></ModeBtn>{" "}
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
