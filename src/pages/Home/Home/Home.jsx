import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import AboutSchool from "../AboutSchool/AboutSchool";
import BannerCarousel from "../Carousel/Carousel";
import Notes from "../Notes/Notes";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import AOS from "aos";
import "aos/dist/aos.css";
import FlowtingBall from "../../../components/FlowtingBall/FlowtingBall";
import OurMedia from "../OurMedia/OurMedia";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import "./Home.css";
import Testimony from "../Testimony/Testimony";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const bugArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="relative">
        <BannerCarousel></BannerCarousel>
        <div className="lg:absolute block transform xl:translate-x-[10%] lg:translate-x-0 lg:translate-y-[-10%] xl:translate-y-[-25%]">
          <Notes></Notes>
        </div>
        {/* Flowting Ball */}
        <div className="hidden lg:flex">
          {bugArray.map((item) => (
            <FlowtingBall key={item}></FlowtingBall>
          ))}
        </div>
      </div>

      {/* Popular classes section */}
      <div>
        <div className=" w-11/12 max-w-screen-xl mx-auto">
          <div className="mt-12 md:mt-24 lg:mt-[550px]">
            <PopularClasses></PopularClasses>
          </div>
        </div>
        {/* Extra section (About School) */}
        <div className="my-32">
          <AboutSchool></AboutSchool>
        </div>
        {/* Popular Instuctors section */}
        <div className="w-11/12 max-w-screen-xl mx-auto">
          <div className="mt-12">
            <PopularTeacher></PopularTeacher>
          </div>
        </div>
        {/* Our Media Section */}
        <div
          className="mt-12 py-32"
          style={{
            backgroundImage: "url(https://i.ibb.co/56S0CBk/circles.png)",
            backgroundPosition: "50% 50%",
          }}
        >
          <div
            style={{
              backgroundImage:
                "url(https://i.ibb.co/ZxnNJDs/backgrond-video.png)",
              backgroundPosition: "50% 50%",
            }}
          >
            <div className="lg:max-w-screen-xl w-11/12 md:w-10/12 mx-auto">
              <OurMedia></OurMedia>
            </div>
          </div>
        </div>

        {/* Home Blogs */}
        <div className="home-blog-container bg-[--home-blog-bg] relative">
          <div className=" w-11/12 max-w-screen-xl mx-auto mt-12">
            <HomeBlogs></HomeBlogs>
          </div>
        </div>

        {/* Testimony */}
        <div className="w-11/12 max-w-screen-xl mx-auto mt-12">
          <Testimony></Testimony>
        </div>
      </div>
    </div>
  );
};

export default Home;
