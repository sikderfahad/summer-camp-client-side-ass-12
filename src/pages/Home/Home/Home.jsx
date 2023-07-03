// import React from 'react';

import Title from "../../../shared/Title/Title";
import BannerCarousel from "../Carousel/Carousel";
import Notes from "../Notes/Notes";
import PopularClasses from "../PopularClasses/PopularClasses";
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
          <div className="mt-[550px]">
            <Title
              title={"our classes"}
              subtitle={"Most Popular Classes"}
            ></Title>
          </div>

          <div className="mt-8 max-w-screen-xl mx-auto">
            <PopularClasses></PopularClasses>
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
