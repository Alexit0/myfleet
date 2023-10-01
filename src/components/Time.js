import React from "react";

const Time = (props) => {
  const handleTime = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <label>{props.timeTitle}</label>
      <input
        name={props.name}
        type="time"
        onChange={handleTime}
        index={props.index}
      ></input>
    </span>
  );
};

export default Time;
