import { Parallax } from "react-parallax";
import ButtonAwesome from "../../../shared/ButtonAwesome/ButtonAwesome";

const AboutSchool = () => {
  return (
    <div className="w-full bg-blue-200">
      <Parallax
        blur={{ min: 1, max: 0 }}
        bgImage={"https://i.ibb.co/FDwbxrQ/parallax-about.jpg"}
        bgImageAlt="About school"
        strength={-200}
      >
        <div className="max-w-screen-xl py-32 px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-32 justify-between">
            <div>
              <div className="text-[#efcf4f] font-extrabold">
                <h3 className="text-2xl">Our Classes</h3>
                <h1 className="text-5xl text-white">About School</h1>
                <h3 className="mt-6 text-2xl">
                  Integer in justo euismod nulla feugiat lacinia non porta
                  velit. Vestibulum vulputate purus sit amet vestibulum ultrices
                  mauris malesuada.
                </h3>
              </div>
              <p className="text-white text-lg mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elementum sem ligula. Phasellus eleifend vel justo sit amet
                volutpat. Duis vitae maximus ligula, nec mattis libero. Donec
                eget felis odio.
              </p>
              <div className="mt-6">
                <ButtonAwesome
                  text={"VIEW ALL"}
                  type={"danger"}
                ></ButtonAwesome>
              </div>
            </div>
            <div
              className="rounded-xl w-fit"
              style={{ boxShadow: "30px 30px #efcf4f" }}
            >
              <img
                src="https://i.ibb.co/MpkB7GC/family.jpg"
                className="rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default AboutSchool;
