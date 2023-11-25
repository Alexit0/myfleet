import React from "react";

const Time = ({ index, value, timeTitle, name, handleInput }) => {
  const handleTime = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span>
      <label>{timeTitle}</label>
      <input
        name={name}
        type="time"
        onChange={(event) => handleTime(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Time;
