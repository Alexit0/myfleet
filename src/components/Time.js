import React from "react";

const Time = (props) => {
  return (
    <span>
      <label>{props.timeTitle}</label>
      <input type="time"></input>
    </span>
  );
};

export default Time;
