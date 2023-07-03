// import React from 'react';

import BannerCarousel from "../Carousel/Carousel";
import Notes from "../Notes/Notes";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
// bg-[#f7f5ef]
const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <BannerCarousel></BannerCarousel>
          <div
            className="absolute"
            style={{ transform: "translate(10%, -25%)" }}
          >
            <Notes></Notes>
          </div>
        </div>

        <div>
          <div className=" max-w-screen-xl mx-auto">
            <div className="mt-[550px]">
              <PopularClasses></PopularClasses>
            </div>
            <div className="mt-12">
              <PopularTeacher></PopularTeacher>
            </div>
          </div>

          <div className="text-4xl font-bold text-center mt-24">
            <h1>This is Home page</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
