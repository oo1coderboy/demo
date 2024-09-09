import React from "react";

function Button(props) {
  return (
    <div>
      <button className="outline outline-offset-2 outline-blue-500 rounded-md">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
