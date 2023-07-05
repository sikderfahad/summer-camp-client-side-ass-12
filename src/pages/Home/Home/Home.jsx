// import React from 'react';

import Footer from "../../../shared/Footer/Footer";
import AboutSchool from "../AboutSchool/AboutSchool";
import BannerCarousel from "../Carousel/Carousel";
import Notes from "../Notes/Notes";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
// bg-[#f7f5ef]
const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <BannerCarousel></BannerCarousel>
        <div className="absolute" style={{ transform: "translate(10%, -25%)" }}>
          <Notes></Notes>
        </div>
      </div>
      {/* Popular classes section */}
      <div>
        <div className=" max-w-screen-xl mx-auto">
          <div className="mt-[550px]">
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

      {/* Footer */}
      <div className="mt-12">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
