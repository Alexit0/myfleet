import React from "react";

const Time = (props) => {
  const handleTime = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <label>{props.timeTitle}</label>
      <input
        name={props.name}
        type="time"
        onChange={(event) => handleTime(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default Time;
