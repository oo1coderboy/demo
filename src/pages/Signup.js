import React from "react";
import Template from "../components/Template";
import signupImage from "../assets/signupImage.jpg";
function Signup({ setLoggedIn }) {
  return (
    <div className="text-white">
      <Template
        title="Join the millions learning to code with StudyNotaion for free"
        desc1="Build skills for today,tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImage}
        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
}

export default Signup;
