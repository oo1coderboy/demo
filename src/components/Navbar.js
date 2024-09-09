import React, { useState } from "react";
import logo from "../assets/Logo-Full-Light.png";
import Button from "./Button";
import { Link, useNavigate, navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar(props) {
  const navigate = useNavigate();
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;

  const handleLogOut = () => {
    toast.success("Log Out successfully!");

    navigate("/");
    setLoggedIn(false);
  };

  return (
    <div className="flex flex-row justify-between ml-12 mr-12 pt-4 pb-4 border-b border-slate-500 items-center text-white">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-8 w-40" loading="lazy" />
      </Link>
      <ul className="flex gap-4">
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      {/*<div className="flex gap-4">
        <Link to={'/login'}><Button className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100" text="Login" /></Link>
        <Link to={'/signup'}><Button className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100" text="SignUp" /></Link>
      </div> */}
      {/* Login - Signup - LogOut - Dashboard */}
      <div className="flex gap-8">
        {!isLoggedIn && (
          <Link to={"/login"}>
            <button className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Log In
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to={"/Signup"}>
            <button className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to={"/"}>
            <button
              className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to={"/dashboard"}>
            <button className="rounded-md border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
