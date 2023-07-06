import { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { BsFacebook, BsFillHouseCheckFill } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/img/google.png";
import "./Login.css";
import { ToastMsgError, ToastMsgSuc } from "../../components/Toast/ToastMsg";
import useTitle from "../../hooks/useTitle";
import useAuth from "../../hooks/useAuth";
import { AwesomeButtonProgress } from "react-awesome-button";
import { MailIcon } from "@primer/octicons-react";

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const from = location?.state?.from;
  // console.log(from, location);

  const navigate = useNavigate();

  const { googleUser, githubUser, loginWithEmailPass } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);

  const loginToggle = () => {
    setLogin(!login);
  };

  const handledGoogleSignIn = () => {
    googleUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handledGithubSignIn = () => {
    githubUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        navigate(from);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handledLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");
    setSuccess("");

    loginWithEmailPass(email, password)
      .then((res) => {
        const signedUser = res.user;

        signedUser && ToastMsgSuc("Your login successful!");

        signedUser && setSuccess("You login successful!");
        console.log(signedUser);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);

        const passMissing = error.message.includes("missing-password");
        passMissing &&
          setError("Password is missing! Please enter a valid Password");
        passMissing && ToastMsgError("Password is missing!");

        const userNotFound = error.message.includes("user-not-found");
        userNotFound && setError("User not found! Please enter a valid Email");
        userNotFound && ToastMsgError("User not found! ");

        const invalidEmail = error.message.includes("invalid-email");
        invalidEmail && setError("Invalid Email! Please enter a valid Email");
        invalidEmail && ToastMsgError("Invalid Email! ");

        const wrongPassword = error.message.includes("wrong-password");
        wrongPassword && setError("Wrong Password! Please try again");
        wrongPassword && ToastMsgError("Wrong Password!");

        const networkFaild = error.message.includes("network-request-faild");
        networkFaild && setError("No Internet! Please check your connectivity");
        networkFaild && ToastMsgError("No Internet!");
      });
  };

  return (
    <div className="py-[200px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="https://i.ibb.co/n3d0PFZ/login-side-image.png"
          className="w-10/12"
          alt=""
        />
      </div>
      <div className="mx-auto flex flex-col gap-7 relative ">
        <h1 className="text-center text-5xl spicy-title font-medium ">
          Let{"'"}s connect our universe{" "}
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

        {!login && (
          <div className="text-center w-7/12 flex flex-col items-center justify-center mx-auto gap-2">
            <button
              onClick={handledGithubSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="flex w-full items-center justify-between gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <BsFacebook className="text-3xl" />
                Countinue Facebook
              </span>
            </button>

            <button
              onClick={handledGoogleSignIn}
              className="relative w-full flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-pink-600 to-orange-500 group-hover:from-pink-600 group-hover:to-orange-500 dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-300 dark:focus:ring-orange-800"
            >
              <span className="flex w-full items-center justify-between gap-4 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-black">
                <img className="w-[30px]" src={googleIcon} alt="" />
                Countinue Google
              </span>
            </button>

            <button
              onClick={loginToggle}
              className="text-[#3291ff] btn-other-signup-option text-lg"
            >
              Countinue with Email →
            </button>
          </div>
        )}

        {login && (
          <div className="w-100% w-[320px] mx-auto">
            <form
              onSubmit={handledLogin}
              className="flex flex-col gap-4"
              action=""
            >
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg bg-transparent "
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box relative">
                <input
                  className="w-full p-3 border border-gray-300  rounded-lg bg-transparent "
                  type={`${!show ? "password" : "text"}`}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute text-xl p-3 right-0 cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {!show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              {/* <button className="bg-white text-base font-semibold w-full grid grid-cols-[2fr,5fr] text-left items-center text-black p-3 rounded-lg hover:bg-transparent hover:text-white border">
                <MdOutlineMailOutline className="text-2xl" /> Login with Email
              </button> */}

              <AwesomeButtonProgress
                before={<MailIcon></MailIcon>}
                type="primary"
                onPress={async (element, next) => {
                  next();
                }}
              >
                Login with Email
              </AwesomeButtonProgress>

              <button
                onClick={loginToggle}
                className="text-[#3291ff] btn-other-signup-option w-fit mx-auto "
              >
                ← Other Sign Up Options
              </button>
            </form>
          </div>
        )}
        <p className="text-center">
          By joining, you agree to our{" "}
          <Link className="text-[#3291ff] hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-[#3291ff] hover:underline">Privacy Policy</Link>
        </p>

        <p className=" text-center">
          Dont have an Account?{" "}
          <Link
            className="text-[#3291ff] hover:underline"
            style={{ TextDecoder: "underline" }}
            to={"/register"}
          >
            {" "}
            Please Signup →
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
