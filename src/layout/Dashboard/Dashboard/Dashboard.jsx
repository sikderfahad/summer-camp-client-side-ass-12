// import { GrClose, GrMenu } from "react-icons/gr";

import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { BiMenu, BiSolidBookAdd } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { FaBook, FaCalendarAlt, FaHistory, FaUsersCog } from "react-icons/fa";
import "./Dashboard.css";
import DashboardNavLink from "../DashboardNavLink/DashboardNavLink";
import ToastBox from "../../../components/Toast/ToastBox";
import ModeBtn from "../../../shared/ModeBtn/ModeBtn";
import useUserType from "../../../hooks/useUserType";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { PageLoading } from "../../../components/Spinner/Spinner";

// Admin Dashboard Menu
const adminMenu = [
  {
    icon: <FaBook></FaBook>,
    menuName: "manage classes",
    path: "/dashboard/admin/manage-class",
  },
  {
    icon: <FaUsersCog></FaUsersCog>,
    menuName: "manage users",
    path: "/dashboard/admin/manage-users",
  },
];

// Instructor Dashboard Menu
const instructorMenu = [
  {
    icon: <BiSolidBookAdd></BiSolidBookAdd>,
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
    menuName: "selected classes",
    path: "/dashboard/student/selected-class",
  },
  {
    icon: <FaCalendarAlt></FaCalendarAlt>,
    menuName: "enrolled classes",
    path: "/dashboard/student/enrolled-class",
  },
  {
    icon: <FaHistory></FaHistory>,
    menuName: "payment history",
    path: "/dashboard/student/payment-history",
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
    icon: <GiTeacher></GiTeacher>,
    menuName: "classes",
    path: "/classes",
  },
  {
    icon: <HiUserGroup></HiUserGroup>,
    menuName: "instructors",
    path: "/instructors",
  },
];

const Dashboard = () => {
  const [userType] = useUserType();

  const isAdmin = userType === "admin";
  const isInstructor = userType === "instructor";
  const isStudent = userType === "student";
  // console.log(userType, isAdmin);

  const bounceAnimation = {
    x: [-100, 50, 0],
    transition: {
      duration: 0.8,
      // repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content 
        
        "
        >
          {/* Page content here */}

          <div className="lg:hidden flex py-4 w-11/12 mx-auto justify-between items-center">
            <div className="logo flex flex-col ">
              <img
                className="w-3/4 lg:w-full"
                src={"https://i.ibb.co/rfK9GSn/nota-logo.png"}
                alt=""
              />
            </div>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square drawer-button bg-[#f2f2f2] p-0"
            >
              <BiMenu className="text-2xl text-[--accent] "></BiMenu>
            </label>
          </div>

          {isLoading ? (
            <PageLoading />
          ) : (
            <div className="p-4 lg:py-12 lg:px-8">
              <Outlet></Outlet>
              <ToastBox></ToastBox>
            </div>
          )}

          {/* Page content here */}
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="drawer-side lg:border-r-2 border-0 w-full lg:w-fit min-h-full "
        >
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu px-4 h-full py-6 grid grid-cols-1 items-center bg-[--dashboard-bg] text-base-content">
            {/* Sidebar content here */}
            <div className="flex gap-4 justify-between items-center">
              {/* Logo */}
              <div className="logo w-fit flex flex-col ">
                <img
                  className="scale-[0.8] animate-pulse"
                  src={"https://i.ibb.co/rfK9GSn/nota-logo.png"}
                  alt=""
                />
              </div>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-outline drawer-button bg-[#f2f2f2] lg:hidden"
              >
                <span className="">
                  <MdClose className="text-3xl text-red-600 font-semibold"></MdClose>
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
                  <motion.li animate={bounceAnimation} key={idx}>
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
                  </motion.li>
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
