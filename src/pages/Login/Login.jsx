import { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { BsFillHouseCheckFill, BsGithub, BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { MdOutlineMailOutline } from "react-icons/md";
// import googleIcon from "../../assets/img/google.png";
import "./Login.css";
import { ToastMsgError, ToastMsgSuc } from "../../components/Toast/ToastMsg";
import useTitle from "../../hooks/useTitle";
import useAuth from "../../hooks/useAuth";
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";
import { MailIcon } from "@primer/octicons-react";
import styles from "./Button.module.css";
import {} from "@primer/octicons-react"; // custom icons
import { useForm } from "react-hook-form";
import saveNewUser from "../../hooks/saveNewUser";

const Login = () => {
  useTitle("Login");
  const location = useLocation();
  const from = location?.state?.from;
  // console.log(from, location);

  const navigate = useNavigate();

  const { googleUser, gitHubUser, loginWithEmailPass } = useAuth();
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
        navigate(from || "/");
        if (signedUser) {
          const { email, displayName, photoURL } = signedUser;
          saveNewUser(email, displayName, photoURL);
        }
      })
      .catch((error) => {
        console.log(error.message);
        const emailExist = error.message.includes(
          "account-exists-with-different-credential"
        );

        if (emailExist) {
          ToastMsgError("Existing email found!");
          setError("Email exist in different credential");
          navigate("/login");
        }
      });
  };

  const handledGitHubSignIn = () => {
    gitHubUser()
      .then((res) => {
        const signedUser = res.user;
        console.log(signedUser);
        navigate(from || "/");
        if (signedUser) {
          const { email, displayName, photoURL } = signedUser;
          saveNewUser(email, displayName, photoURL);
        }
      })
      .catch((error) => {
        console.log(error.message);
        const emailExist = error.message.includes(
          "account-exists-with-different-credential"
        );
        if (emailExist) {
          ToastMsgError("Existing email found!");
          setError("Email exist in different credential");
          navigate("/login");
        }
      });
  };

  // React Hook From

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    setError("");
    setSuccess("");

    loginWithEmailPass(email, password)
      .then((res) => {
        const signedUser = res.user;

        signedUser && ToastMsgSuc("Your login successful!");

        signedUser && setSuccess("You login successful!");
        console.log(signedUser);
        navigate(from || "/");
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

  // console.log(watch("email", "password"));
  console.log(errors);

  // React Hook From

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
          <div className="text-center w-7/12 flex flex-col items-center justify-center mx-auto gap-4">
            <span onClick={handledGoogleSignIn} className="w-full">
              <AwesomeButton
                type="primary"
                ripple={true}
                className={`${styles.loginBtn} w-full`}
              >
                <span className="flex items-center gap-4">
                  <BsGoogle className="text-2xl"></BsGoogle> Continue With
                  Google
                </span>
              </AwesomeButton>
            </span>

            <span onClick={handledGitHubSignIn} className="w-full">
              <AwesomeButton
                type="danger"
                ripple={true}
                className={`${styles.loginBtn} w-full`}
              >
                <span className="flex items-center gap-4">
                  <BsGithub className="text-2xl"></BsGithub> Continue With
                  GitHub
                </span>
              </AwesomeButton>
            </span>

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
              onSubmit={handleSubmit(onSubmit)}
              // onSubmit={handledLogin}
              className="flex flex-col gap-4"
              action=""
            >
              <div className="flex items-center max-w-[320px] login-box">
                <input
                  {...register("email")}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[--fieldBg] "
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="flex items-center max-w-[320px] login-box relative">
                <input
                  {...register("password")}
                  className="w-full p-3 border border-gray-300  rounded-lg bg-[--fieldBg] "
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

              {/* Login Button */}
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
                className="text-[#3291ff] font-semibold btn-other-signup-option w-fit mx-auto "
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
