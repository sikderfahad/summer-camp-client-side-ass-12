// ButterflyIcon.js
import { PiButterfly } from "react-icons/pi";
import { motion } from "framer-motion";

const Test = () => {
  const moveForward = {
    y: -200,
    x: [-20, 20],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <div className="mt-32">
      <motion.span
        className="absolute text-2xl inline-block"
        initial={{ y: 0, x: 0 }}
        animate={moveForward}
      >
        <PiButterfly></PiButterfly>
      </motion.span>
    </div>
  );
};

export default Test;
