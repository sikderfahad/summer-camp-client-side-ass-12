import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div className=" p-10 bg-[--accent]">
      <footer className="footer grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center max-w-screen-xl mx-auto p-10  text-[--white]">
        <div>
          <img src="https://i.ibb.co/rfK9GSn/nota-logo.png" alt="" />
          <p className="mt-6  leading-[2] text-lg">
            Quisque quis dignissim elit. Aliquam et augue aliquet orci maximus
            convallis id vitae augue. Phasellus elementum commodo aliquet.
          </p>
        </div>
        <div className="text-center">
          <span
            style={{ opacity: "1" }}
            className="footer-title text-2xl font-extraboldbold text-[--primary]"
          >
            Contact Us
          </span>
          <div className="flex flex-col gap-6 mt-8 ">
            <a className="link hover:text-[--primary] flex items-center gap-2 link-hover">
              <MdLocationPin className="text-xl  text-[--primary]"></MdLocationPin>
              <span>04360, NewYork, 33 Matehouse str., 12/4</span>
            </a>
            <a className="link hover:text-[--primary] flex items-center gap-2 link-hover">
              <MdCall className="text-xl  text-[--primary]"></MdCall>

              <span>803-33-5644-99</span>
            </a>
            <a className="link hover:text-[--primary] flex items-center gap-2 link-hover">
              <MdEmail className="text-xl  text-[--primary]"></MdEmail>

              <span>admin@doremischool.net</span>
            </a>
          </div>
        </div>

        <div className="">
          <span
            style={{ opacity: "1" }}
            className="footer-title text-2xl font-extraboldbold text-[--primary]"
          >
            Follow Us On
          </span>
          <div className="flex flex-col gap-6 mt-8 ">
            <a
              className="hover:text-[--primary] hover:ml-4  flex gap-5 duration-200 items-center"
              href="https://www.twitter.com/"
            >
              <SlSocialTwitter />
              Twitter
            </a>
            <a
              className="hover:text-[--primary] hover:ml-4 flex gap-5 duration-200 items-center"
              href="https://www.facebook.com/"
            >
              <SlSocialFacebook />
              Facebook
            </a>
            <a
              className="hover:text-[--primary] hover:ml-4  flex gap-5 duration-200 items-center"
              href="https://www.instagram.com/"
            >
              <SlSocialInstagram />
              Instagram
            </a>
            <a
              className="hover:text-[--primary] hover:ml-4  flex gap-5 duration-200 items-center"
              href="https://www.youtube.com/"
            >
              <SlSocialYoutube />
              Youtube
            </a>
            <a
              className="hover:text-[--primary] hover:ml-4  flex gap-5 duration-200 items-center"
              href="https://www.pinterest.com/"
            >
              <SlSocialPintarest />
              Pintarest
            </a>
          </div>
        </div>

        {/* <div>
          <h2 className="ftitle  font-semibold">Follow Us On </h2>
          <div>
            <ul className="flex flex-col gap-7 ">
              <li>
                <a
                  className="hover:text-[#30beeb]  hover:ml-4 flex gap-5 duration-200 items-center"
                  href="https://www.facebook.com/"
                >
                  <SlSocialFacebook />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                  href="https://www.twitter.com/"
                >
                  <SlSocialTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                  href="https://www.instagram.com/"
                >
                  <SlSocialInstagram />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                  href="https://www.youtube.com/"
                >
                  <SlSocialYoutube />
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="hover:text-[#30beeb] hover:ml-4  flex gap-5 duration-200 items-center"
                  href="https://www.pinterest.com/"
                >
                  <SlSocialPintarest />
                  Pintarest
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
