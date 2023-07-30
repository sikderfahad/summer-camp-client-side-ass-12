import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const DashboardNavLink = ({ menu }) => {
  const bounceAnimation = {
    x: [-100, 50, 0],
    transition: {
      duration: 0.8,
      // repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <motion.li animate={bounceAnimation}>
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
    </motion.li>
  );
};

export default DashboardNavLink;
