import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import ButtonAwesome from "../../../shared/ButtonAwesome/ButtonAwesome";
import { motion } from "framer-motion";

const slider1 = "https://i.ibb.co/dk7pcFh/SLIDE1.jpg";
const slider2 = "https://i.ibb.co/dDmQtPg/SLIDE2.jpg";
const slider3 = "https://i.ibb.co/K6qqwW2/SLIDE3.jpg";
const slider4 = "https://i.ibb.co/1bzYXsc/SLIDE4.jpg";
const slider5 = "https://i.ibb.co/HgYkk9Z/SLIDE5.jpg";

const BannerCarousel = () => {
  const sliderImgBox = [slider1, slider2, slider3, slider4, slider5];

  const bounceAnimation = {
    y: [-200, 100, 0],
    opacity: 1,
    transition: {
      duration: 1.5,
      // repeat: Infinity,
      ease: "easeInOut",
    },
  };
  return (
    <div className="relative min-h-screen mt-16 md:mt-0">
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        useKeyboardArrows={true}
        // autoFocus="true"
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        swipeable={true}
        showStatus={false}
      >
        {sliderImgBox.map((item, idx) => (
          <div className="carousel-container" key={idx}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
      <div className="slider-content absolute w-full h-full top-0 flex items-center justify-center bg-[#00000047] left-0">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={bounceAnimation}
          className="text-center w-11/12 md:w-full lg:max-w-screen-md mx-auto"
        >
          <motion.h3
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
            initial={{ color: "000", opacity: 0, scale: 0 }}
            animate={{ color: "#efcf4f", opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeIn",
            }}
            className=" cursor-grabbing spicy-title text-3xl md:text-[48px] "
          >
            Playing Guitar —
          </motion.h3>
          <motion.h1
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
            style={{
              letterSpacing: "5px",
              textShadow: "6px 8px 0px rgba(0,0,0,.15)",
            }}
            className="text-5xl cursor-grab md:text-[120px] md:mt-4 spicy-title text-white"
          >
            Realy Easy
          </motion.h1>
          <p className="mt-4 text-base md:text-xl text-justify md:text-center font-semibold text-white">
            Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
            euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
            ligula.
          </p>

          <div className="mt-8">
            <motion.button
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
              className="cursor-grab"
            >
              <ButtonAwesome type={"danger"}></ButtonAwesome>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default BannerCarousel;
