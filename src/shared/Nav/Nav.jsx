// import React from 'react';

import { NavLink } from "react-router-dom";
import "./Nav.css";
import { motion } from "framer-motion";

const Nav = ({ item }) => {
  const bounceAnimation = {
    y: [-80, 80, 0],
    transition: {
      duration: 0.5,
      // repeat: 1,
      ease: "easeInOut",
    },
  };
  // console.log(item);
  return (
    <motion.li
      // initial={{ scale: 0.1, opacity: 0.1, y: -200 }}
      // animate={{ scale: 1, opacity: 1, y: 0 }}
      // transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
      animate={bounceAnimation}
      className="flex flex-row gap-3 items-center"
    >
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
    </motion.li>
  );
};

export default Nav;
