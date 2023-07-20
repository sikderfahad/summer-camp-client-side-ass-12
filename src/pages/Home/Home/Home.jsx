// import React from 'react';

import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import AboutSchool from "../AboutSchool/AboutSchool";
import BannerCarousel from "../Carousel/Carousel";
import Notes from "../Notes/Notes";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="relative">
        <BannerCarousel></BannerCarousel>
        <div
          // data-aos="zoom-in-up"
          className="md:absolute block md:transform md:translate-x-[10%] md:translate-y-[-25%]"
          // style={{ transform: "translate(10%, -25%)" }}
        >
          <Notes></Notes>
        </div>
      </div>

      {/* Popular classes section */}
      <div>
        <div className=" w-11/12 max-w-screen-xl mx-auto">
          <div className="mt-12 md:mt-[550px]">
            <PopularClasses></PopularClasses>
          </div>
        </div>
        {/* Extra section (About School) */}

        <div className="my-32">
          <AboutSchool></AboutSchool>
        </div>

        {/* Popular Instuctors section */}
        <div className=" max-w-screen-xl mx-auto">
          <div className="mt-12">
            <PopularTeacher></PopularTeacher>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
