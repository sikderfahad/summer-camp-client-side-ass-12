import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const TeacherCard = ({ item, teacherPage }) => {
  const socialLinkTeacher =
    " text-opacity-50 hover:scale-110 duration-200 hover:text-opacity-100";
  return (
    <div>
      <div className="card max-w-sm ">
        {teacherPage ? (
          <div className="flex flex-col items-center justify-center">
            <div className=" avatar w-[250px] mx-auto h-[250px] text-center rounded-full">
              <img
                src={teacherPage?.photoURL}
                className=" border hover:border-8 hover:p-[5px] duration-200 rounded-full border-yellow-400  p-3"
                alt=""
              />
            </div>
            <div className="card-body text-center">
              <h1 className="text-[#0c4b65] text-2xl font-extrabold">
                {teacherPage?.displayName}
              </h1>
              <h1 className="text-[#c25934] flex items-center gap-2 text-xl font-semibold">
                <MdMail></MdMail> {teacherPage?.email}
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className=" avatar w-[250px] mx-auto h-[250px] text-center rounded-full">
              <img
                src={item?.image}
                className=" border hover:border-8 hover:p-[5px] duration-200 rounded-full border-yellow-400  p-3"
                alt=""
              />
            </div>
            <div className="card-body text-center">
              <h1 className="text-[#0c4b65] text-2xl font-extrabold">
                {item?.instructor}
              </h1>
              <p className="text-[#c25934] font-bold">
                {item?.name.split(" ")[0]} teacher
              </p>
              <p className="font-bold">{item?.enrolledStudents} Students</p>
              <div className=" mt-6 text-xl flex mx-auto items-center gap-4 ">
                <Link to={"http://www.facebook.com"}>
                  <FaFacebookF className={socialLinkTeacher}></FaFacebookF>
                </Link>
                <Link to={"http://www.google.com"}>
                  <FaGooglePlusG className={socialLinkTeacher}></FaGooglePlusG>
                </Link>
                <Link to={"https://www.pinterest.com/"}>
                  <FaPinterestP className={socialLinkTeacher}></FaPinterestP>
                </Link>
                <Link to={"https://www.instagram.com/"}>
                  <FaInstagram className={socialLinkTeacher}></FaInstagram>
                </Link>
                <Link to={"https://www.twitter.com/"}>
                  <FaTwitter className={socialLinkTeacher}></FaTwitter>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherCard;
