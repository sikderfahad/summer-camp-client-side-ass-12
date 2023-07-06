// import React from 'react';

import { NavLink } from "react-router-dom";

const DashboardNavLink = ({ menu }) => {
  return (
    <li>
      <NavLink
        to={menu.path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-bold flex items-center gap-3 uppercase text-[#c8c8c8]"
            : "font-bold flex items-center gap-3 uppercase  hover:text-[--dbLink] "
        }
      >
        <span className="text-2xl">{menu.icon}</span>
        <span>{menu.menuName}</span>
      </NavLink>
    </li>
  );
};

export default DashboardNavLink;
