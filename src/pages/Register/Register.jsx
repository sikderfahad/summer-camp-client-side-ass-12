// import React from 'react';

import "./Register.css";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TiWarningOutline } from "react-icons/ti";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";
import useTitle from "../../hooks/useTitle";
import { AwesomeButtonProgress } from "react-awesome-button";
import { MailIcon } from "@primer/octicons-react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Alart from "../../shared/Alart/Alart";
import { getAuth, updateProfile } from "firebase/auth";
import saveNewUser from "../../hooks/saveNewUser";
// import ReactBtnStyles from "./ButtonRegister.module.css";

const Register = () => {
  useTitle("Sign up");
  const { createUser, loading, logOut } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const [showConf, setShowConf] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const img_key = import.meta.env.VITE_imageBB_api_token;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_key}`;

  const onSubmit = (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    const { name, email, password, confPassword } = data;

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          setError("");
          setSuccess("");

          if (password !== confPassword) {
            return setError("Confirm password does't matched");
          }

          createUser(email, password)
            .then((res) => {
              const newUser = res.user;
              console.log(newUser);

              const auth = getAuth();
              updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: imgData.data.display_url,
              })
                .then(() => {
                  setSuccess("You successfuly create an account!");
                  ToastMsgSuc("Signup successful! Please login to continue...");
                  const photo = imgData.data.display_url;
                  saveNewUser(email, name, photo);
                  reset();

                  // Logout after successfully Registration
                  logOut()
                    .then(() => {
                      navigate("/login");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  // console.log("user updated");
                })
                .catch((error) => {
                  console.log(error);
                });

              // console.log(newUser);
            })
            .catch((error) => {
              console.log(error.message);
              const weakPass = error.message.includes("weak-password");
              weakPass &&
                setError("Weak password! Please give at least 6 characters");

              const userExist = error.message.includes("email-already-in-use");
              userExist &&
                setError("This email already exist! Please try another");

              const emailMissing = error.message.includes("email-missing");
              emailMissing &&
                setError("Email is missing! Please enter a valid email");

              const passMissing = error.message.includes("password-missing");
              passMissing &&
                setError("Password is missing! Please enter a valid Password");
            });
        }
      });
  };

  const inputStyle = "border w-full p-3 rounded-lg input-bg";
  return (
    <div className="py-[200px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div data-aos="zoom-in-down" className="order-2">
        <img src="https://i.ibb.co/sKG9M7t/sign-up-side-image.png" alt="" />
      </div>
      <div
        data-aos="zoom-in-up"
        className="order-1 flex flex-col gap-7  top-[100px] "
      >
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
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
              action=""
            >
              {/* NAME FIELD */}
              <div>
                <div className="flex items-center max-w-[320px] login-box">
                  <input
                    {...register("name", {
                      required: "Name is required!",
                      maxLength: {
                        value: 30,
                        message: "Name must lessthan 30 characters",
                      },
                    })}
                    className={inputStyle}
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </div>
                {errors.name && <Alart msg={errors.name?.message}></Alart>}
              </div>

              {/* EMAIL FIELD */}
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  {...register("email", { required: "Email is required!" })}
                  className={inputStyle}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                {errors.email && <Alart msg={errors.email?.message}></Alart>}
              </div>

              {/* PASSWORD FIELD */}
              <div>
                <div className="flex items-center max-w-[320px] login-box relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*0-9]{6,}$/,
                        message:
                          "Password must contain an uppercase letter and a special character",
                      },
                    })}
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

                {errors.password && (
                  <Alart msg={errors.password?.message}></Alart>
                )}
              </div>

              {/* CONFIRM PASSWORD FIELD */}
              <div>
                <div className="flex items-center max-w-[320px] login-box relative">
                  <input
                    {...register("confPassword", {
                      required: "Confirm password is required!",
                    })}
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
                {errors.confPassword && (
                  <Alart msg={errors.confPassword?.message}></Alart>
                )}
              </div>

              {/* PROFILE PHOTO FIELD */}
              <div>
                <input
                  {...register("image", {
                    required: "User photo file is required!",
                  })}
                  name="image"
                  id="image"
                  type="file"
                  placeholder="Photo url"
                  className="file-input file-input-bordered file-input-info w-full"
                />
                {errors.image && <Alart msg={errors.image?.message}></Alart>}
              </div>

              <AwesomeButtonProgress
                loadingLabel="Please wait..."
                disabled={loading}
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
            <Link className="hover:underline text-[#3291ff]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link className="hover:underline text-[#3291ff]">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
