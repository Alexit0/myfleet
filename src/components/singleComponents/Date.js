import React from "react";

const Date = ({ index, value, dateTitle, handleInput }) => {
  const handleDateInput = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span>
      <label>{dateTitle}</label>
      <input
        name="date"
        type="date"
        onChange={(event) => handleDateInput(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Date;
