// import React from 'react';

// import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TiWarningOutline } from "react-icons/ti";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";
import useTitle from "../../hooks/useTitle";
import { AwesomeButtonProgress } from "react-awesome-button";
import { MailIcon } from "@primer/octicons-react";
// import ReactBtnStyles from "./ButtonRegister.module.css";

const Register = () => {
  useTitle("Sign up");
  const { signInWithEmailPass, userProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const navigate = useNavigate();

  const handledSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    setError("");
    setSuccess("");

    signInWithEmailPass(email, password)
      .then((res) => {
        const newUser = res.user;

        userProfile(newUser, {
          displayName: name,
          photoURL: photo && photo,
        })
          .then(() => {
            setSuccess("You successfuly create an account!");
            ToastMsgSuc("Signup successful!");
            form.reset();
            navigate("/");
          })
          .catch((err) => {
            console.log(err.message);
          });

        console.log(newUser);
      })
      .catch((error) => {
        console.log(error.message);
        const weakPass = error.message.includes("weak-password");
        weakPass &&
          setError("Weak password! Please give at least 6 characters");

        const userExist = error.message.includes("email-already-in-use");
        userExist && setError("This email already exist! Please try another");

        const emailMissing = error.message.includes("email-missing");
        emailMissing &&
          setError("Email is missing! Please enter a valid email");

        const passMissing = error.message.includes("password-missing");
        passMissing &&
          setError("Password is missing! Please enter a valid Password");
      });
  };

  const inputStyle = "border w-full p-3 rounded-lg bg-transparent";
  return (
    <div className="py-[200px] ">
      <div className="md:w-4/12 w-10/12 mx-auto flex flex-col gap-7  top-[100px] ">
        <h1 className="text-center spicy-title text-5xl font-medium ">
          Create Nota Corda Account{" "}
        </h1>

        {error && (
          <div className="w-fit p-4 flex items-center gap-4 rounded text-lg font-medium bg-red-500 text-white text-center mx-auto">
            <TiWarningOutline className="text-3xl" /> {error}
          </div>
        )}

        {success && (
          <div className="w-fit p-4 rounded flex items-center gap-4 text-lg font-medium bg-green-500 text-white text-center mx-auto">
            <BsFillHouseCheckFill className="text-3xl" /> {success}
          </div>
        )}

        <div>
          <div className="w-100% w-[320px] mx-auto">
            <form
              onSubmit={handledSignup}
              className="flex flex-col gap-4"
              action=""
            >
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className={inputStyle}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className={inputStyle}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box relative">
                <input
                  className={inputStyle}
                  type={`${!show ? "password" : "text"}`}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute  text-xl p-3 right-0 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {!show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="flex items-center max-w-[320px] login-box relative">
                <input
                  className={inputStyle}
                  type={`${!showConf ? "password" : "text"}`}
                  name="confPassword"
                  placeholder="Confirm Password"
                  required
                />
                <span
                  className="absolute  text-xl p-3 right-0 cursor-pointer"
                  onClick={() => setShowConf(!showConf)}
                >
                  {!showConf ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className={inputStyle}
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                />
              </div>

              {/* <button className="text-base bg-[--registerBtnBg] text-[white] font-semibold w-full grid grid-cols-[2fr,5fr] text-left items-center p-3 rounded-lg  border">
                <MdOutlineMarkEmailRead className="text-2xl" /> Signup with
                Email
              </button> */}
              <AwesomeButtonProgress
                before={<MailIcon></MailIcon>}
                type="primary"
                onPress={async (element, next) => {
                  next();
                }}
              >
                Signup with Email
              </AwesomeButtonProgress>

              <p className=" text-center">
                Already have an Account?{" "}
                <Link
                  className="text-[#3291ff] hover:underline"
                  state={{ TextDecoder: "underline" }}
                  to={"/login"}
                >
                  {" "}
                  Please Login →
                </Link>
              </p>
            </form>
          </div>

          <p className="text-center  mt-8">
            By joining, you agree to our{" "}
            <Link className=" hover:border-b">Terms of Service</Link> and{" "}
            <Link className=" hover:border-b">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
