import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { BsBug } from "react-icons/bs";
// import { BsBugFill } from "react-icons/bs";
import { PiButterfly } from "react-icons/pi";

const FlowtingBall = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const interval = setInterval(() => {
      // Update the ball's position here
      const newX = Math.random() * (screenWidth - 50); // Subtract 50 to keep the ball within the screen boundaries
      const newY = Math.random() * (screenHeight - 50); // Subtract 50 to keep the ball within the screen boundaries
      setX(newX);
      setY(newY);
    }, 3000); // Adjust the interval to control the animation speed

    return () => clearInterval(interval);
  }, []);

  const [randomColor, setRandomColor] = useState(getRandomColor());

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  useEffect(() => {
    const newRandomColor = getRandomColor();
    setRandomColor(newRandomColor);
  }, []);
  // console.log("color: ", randomColor);

  const moveForward = {
    y: -200,
    x: [-100, 100],
    z: -100,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.span
      className="cursor-grab inline-block animate-pulse"
      drag
      style={{
        fontSize: "24px",
        color: randomColor,
        position: "absolute",
        top: y,
        left: x,
      }}
      animate={{
        x: x,
        y: y,
        z: 0,
      }}
      transition={{
        type: "crossfade",
        stiffness: 100,
        damping: 10,
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <motion.span
        className="inline-block"
        initial={{ y: y, x: x, z: 0 }}
        animate={moveForward}
      >
        <PiButterfly></PiButterfly>
      </motion.span>
    </motion.span>
  );
};

export default FlowtingBall;
