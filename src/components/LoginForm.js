import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({ setLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In Successfully!!");
    navigate("/dashboard");
  };
  //   console.log("Login Form Data: ", formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex w-full flex-col gap-y-4 "
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 ">
          Enter Email<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={FormData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          name="email"
          id="email"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
        />
      </label>

      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Enter Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter Your Password"
          name="password"
          id="password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="text-richblack-5 w-full rounded-[0.5rem] p-[12px] bg-richblack-800 "
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[40px] z-[10] cursor-pointer  "
        >
          {showPassword ? (
            <IoEyeSharp fill="#AFB2BF" />
          ) : (
            <IoEyeOffOutline fill="#AFB2BF" />
          )}
        </span>
        <Link to={"#"}>
          <p className="mt-1 text-blue-100 ml-auto text-xs max-w-max ">
            Forgot Password!
          </p>
        </Link>
      </label>

      <button className="bg-yellow-50 rounded-md mt-6 font-medium text-richblack-900 px-[12px] py-[8px] ">
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;