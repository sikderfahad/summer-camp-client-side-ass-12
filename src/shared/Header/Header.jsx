// import React from 'react';
import "./Header.css";
import Nav from "../Nav/Nav";
import ModeBtn from "../ModeBtn/ModeBtn";
("../../provider/AuthProvider");
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";

export const LoginInfo = ({
  user,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
  handledLogout,
}) => {
  return (
    <ul
      style={{ margin: "0" }}
      className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 ${
        user && "mx-auto"
      }`}
    >
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="lg:w-[150px] lg:h-[80px] flex lg:items-center lg:justify-center duration-200"
      >
        {isHover ? (
          <div className=" duration-200">
            {user?.photoURL ? (
              <img
                className="w-[75px] h-[75px] duration-200 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                className="w-[75px] h-[75px] duration-200"
                src={"https://i.ibb.co/7gkKYRy/Avatar.png"}
                alt=""
              />
            )}
          </div>
        ) : (
          <h1 className="gradient-title duration-200 lg:text-xl text-lg text-green-500 font-semibold">
            {user?.displayName && user.displayName}
          </h1>
        )}
      </li>
      <li>
        <button onClick={handledLogout} title="Click to Logout">
          {/* <VscSignOut className="lg:text-5xl text-3xl text-red-600" /> */}
        </button>
      </li>
    </ul>
  );
};

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  const selectMode = localStorage.getItem("theme");
  const [theme, setTheme] = useState(selectMode ? selectMode : "light");
  console.log(theme);

  const changeTheme = () => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  };

  const handleToggle = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("night");
      changeTheme();
    } else {
      setTheme("light");
      changeTheme();
    }
  };
  changeTheme();

  const handledLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  // const [isHover, setIsHover] = useState(false);
  //   const handleMouseEnter = () => {
  //     user?.displayName && setIsHover(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHover(false);
  //   };

  // const user = false;
  const defaultNav = [
    { path: "/", label: "Home" },
    { path: "/test", label: "Test" },
    { path: "/classes", label: "classes" },
    { path: "/instructor", label: "instructor" },
    { path: "/dashboard", label: "dashboard" },
  ];

  if (!user) {
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
            <ModeBtn handleToggle={handleToggle} theme={theme}></ModeBtn>
          </ul>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
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
              <ModeBtn handleToggle={handleToggle} theme={theme}></ModeBtn>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
