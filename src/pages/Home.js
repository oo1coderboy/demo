import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col items-center mt-[70px]">
      <Link to={"/"}>
        <button className="rounded-full border border-richblack-700 bg-richblack-800 px-4 py-2 text-richblack-100">
          Become an Instructor
        </button>
        <FaArrowRight />
      </Link>
    </div>
  );
}

export default Home;
