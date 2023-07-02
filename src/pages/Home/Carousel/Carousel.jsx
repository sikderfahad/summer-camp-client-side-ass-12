import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

import slider1 from "../../../assets/img/SLIDE1.jpg";
import slider2 from "../../../assets/img/SLIDE2.jpg";
import slider3 from "../../../assets/img/SLIDE3.jpg";
import slider4 from "../../../assets/img/SLIDE4.jpg";
import slider5 from "../../../assets/img/SLIDE5.jpg";

const BannerCarousel = () => {
  const sliderImgBox = [slider1, slider2, slider3, slider4, slider5];
  return (
    <div className="relative min-h-screen">
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        useKeyboardArrows={true}
        // autoFocus="true"
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        swipeable={true}
      >
        {sliderImgBox.map((item, idx) => (
          <div className="carousel-container" key={idx}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
      <div className="slider-content absolute w-full h-full top-0 flex items-center justify-center bg-[#00000047] left-0">
        <div className="text-center w-full lg:max-w-screen-md mx-auto">
          <h3 className="text-[#efcf4f] spicy-title text-[48px] ">
            Playing Guitar —
          </h3>
          <h1
            style={{
              letterSpacing: "5px",
              textShadow: "6px 8px 0px rgba(0,0,0,.15)",
            }}
            className="text-[120px] -mt-8 spicy-title text-white"
          >
            Realy Easy
          </h1>
          <p className="mt-4 text-xl font-semibold text-white">
            Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
            euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
            ligula.
          </p>
          <button className="bg-[#c25934] py-4 px-8 hover:bg-white hover:text-gray-900 duration-200 mt-8 text-xl font-bold rounded-lg text-white uppercase">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default BannerCarousel;
