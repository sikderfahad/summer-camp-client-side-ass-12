// import React from 'react';
import "./Header.css";
import Nav from "../Nav/Nav";
import ModeBtn from "../ModeBtn/ModeBtn";
("../../provider/AuthProvider");
import useAuth from "../../hooks/useAuth";
import { FaSignOutAlt } from "react-icons/fa";
import useUserType from "../../hooks/useUserType";

const Header = () => {
  const { user, logOut } = useAuth();
  const [userType] = useUserType();
  const isAdmin = userType === "admin";
  const isInstructor = userType === "instructor";
  const isStudent = userType === "student";
  // const isStudent = userType === "student";

  const handledLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  // instructor/my-class
  const defaultNav = [
    { path: "/", label: "Home" },
    { path: "/classes", label: "classes" },
    { path: "/instructors", label: "instructors" },
  ];

  const dashboardRoute = {
    path: `/`,
    label: "dashboard",
  };

  if (isAdmin) {
    dashboardRoute.path = "/dashboard/admin/manage-users";
  }

  if (isInstructor) {
    dashboardRoute.path = "/dashboard/instructor/add-class";
  }

  if (isStudent) {
    dashboardRoute.path = "/dashboard/student/selected-class";
  }

  if (user) {
    defaultNav.push(dashboardRoute);
  }

  const isDashboard = defaultNav[4]?.label === "dashboard";

  if (!user && isDashboard) {
    defaultNav.pop();
  }

  return (
    <div
      style={{ backdropFilter: "blur(10px)" }}
      className="fixed top-0 left-0 w-full z-[999] bg-[--navBg]"
    >
      <div className="navbar  max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="logo transform scale-[0.80] flex flex-col ">
            <img src={"https://i.ibb.co/rfK9GSn/nota-logo.png"} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu uppercase items-center menu-horizontal px-1">
            {defaultNav.map((item, idx) => (
              <Nav key={idx} item={item}></Nav>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu uppercase hidden items-center lg:flex gap-4 menu-horizontal px-1">
            {!user ? (
              <Nav item={{ path: "/login", label: "login" }}></Nav>
            ) : (
              <li className="flex flex-row gap-3 items-center">
                <img
                  title={user?.displayName && user.displayName}
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/7gkKYRy/Avatar.png"
                  }
                  className="w-[90px] h-[75px] rounded-full"
                  alt=""
                />
                <button onClick={handledLogout}>
                  <FaSignOutAlt className="text-3xl text-[--navColor]"></FaSignOutAlt>
                </button>
              </li>
            )}
            <ModeBtn></ModeBtn>
            {/* handleToggle={handleToggle} theme={theme} */}
          </ul>
          <div className="dropdown">
            <span tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </span>
            <ul
              style={{ transform: "translate(-110px, 10px)" }}
              tabIndex={0}
              className="menu uppercase menu-sm transform translate-x-[-110] dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {defaultNav.map((item, idx) => (
                <Nav key={idx} item={item}></Nav>
              ))}

              {!user ? (
                <Nav item={{ path: "/login", label: "login" }}></Nav>
              ) : (
                <li className="flex flex-col gap-3 items-start">
                  <img
                    title={user?.displayName && user.displayName}
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/7gkKYRy/Avatar.png"
                    }
                    className="w-[90px] h-[75px] rounded-full"
                    alt=""
                  />
                  <button onClick={handledLogout}>
                    <FaSignOutAlt className="text-3xl text-[--navColor]"></FaSignOutAlt>
                  </button>
                </li>
              )}
              <ModeBtn></ModeBtn>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// bg-[--modeBtnBgDb] text-[--modeBtnTextDb]
