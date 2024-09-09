import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import image1 from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, image, formtype, setLoggedIn }) {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] justify-evenly items-center">
      <div className="mx-auto w-11/12 max-w-[450px] md:mx-0 ">
        <h2 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5 ">
          {title}
        </h2>
        <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
          <span className="text-richblack-100">{desc1}</span>{" "}
          <span>
            <span className="font-edu-sa font-bold italic text-blue-100">
              {desc2}
            </span>
          </span>
        </p>

        {formtype === "login" ? (
          <LoginForm setLoggedIn={setLoggedIn} />
        ) : (
          <SignupForm setLoggedIn={setLoggedIn} />
        )}

        <div className="flex flex-row justify-center mt-[19px] items-center gap-3">
          <div className="w-1/2 h-0 border-[0.001rem]  border-richblack-600"></div>
          <p className="text-richblack-600">OR</p>
          <div className="w-1/2 h-0 border-[0.001rem] border-richblack-600"></div>
        </div>
        <div className="w-full flex justify-center items-center gap-3  mt-2 bg-richblack-800 py-[8px] px-[12px] rounded-[8px] text-center text-richblack-100 cursor-pointer text-semibold ">
          <FcGoogle className="" />
          <p>Sign Up with Google</p>
        </div>
      </div>
      <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0  mt-14">
        <img
          src={image1}
          alt="pattern"
          height={504}
          width={558}
          loading="lazy"
        />
        <img
          src={image}
          alt="pic"
          height={400}
          width={558}
          loading="lazy"
          className="absolute -top-2 right-4 z-10 h-[400px]"
        />
      </div>
    </div>
  );
}

export default Template;
