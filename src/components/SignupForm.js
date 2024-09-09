import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

function SignupForm({ setLoggedIn }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleForm = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  // console.log("SignUp Form Data:", formData);
  return (
    <div>
      {/** Student -- Instructor Tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      {/** SignUp form */}
      <form className="mt-10 mb-5">
        <div className="flex  gap-4">
          <label>
            <p>
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              value={FormData.firstname}
              name="firstname"
              onChange={handleForm}
              placeholder="Enter First Name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
            />
          </label>

          <label>
            <p>
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              value={FormData.lastname}
              name="lastname"
              onChange={handleForm}
              placeholder="Enter Last Name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
            />
          </label>
        </div>

        <label>
          <p>
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            required
            value={FormData.email}
            name="email"
            onChange={handleForm}
            placeholder="Enter Email"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
          />
        </label>

        <div className="flex gap-5 mt-5 relative">
          <label>
            <p>
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={isVisible ? "text" : "password"}
              required
              value={FormData.password}
              name="password"
              onChange={handleForm}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
            />
            <span className="absolute right-3 top-[40px] z-[10] cursor-pointer" onClick={() => setIsVisible(!isVisible)} >
              {isVisible ? <IoEyeSharp /> : <IoEyeOffOutline />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={isVisible ? "text" : "password"}
              required
              value={FormData.confirmpassword}
              name="confirmpassword"
              onChange={handleForm}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
            />
            <span className="absolute right-3 top-[40px] z-[10] cursor-pointer left-40" onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? <IoEyeSharp /> : <IoEyeOffOutline />}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 rounded-md mt-6 font-medium text-richblack-900 px-[12px] py-[8px] ">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
