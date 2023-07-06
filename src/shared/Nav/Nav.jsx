// import React from 'react';

import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ item }) => {
  // console.log(item);
  return (
    <li>
      <NavLink
        to={item.path}
        className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : "text-[--navColor] default-nav"
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
};

export default Nav;
