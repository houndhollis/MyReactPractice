import React from "react";

const Basicbutton = ({ text, type }) => {
  return (
    <div>
      <button className={["Basicbutton", `Basicbutton_${type}`].join(" ")}>
        {text}
      </button>
    </div>
  );
};

export default Basicbutton;
