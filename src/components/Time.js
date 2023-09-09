import React from "react";

const Time = (props) => {
  return (
    <form>
      <label>{props.timeTitle}</label>
      <input type="time"></input>
    </form>
  );
};

export default Time;
