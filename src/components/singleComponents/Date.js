import React from "react";

import classes from "../OrderForm.module.css"

const Date = ({ index, value, dateTitle, handleInput }) => {
  const handleDateInput = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span className={classes.datetime}>
      <label>{dateTitle}</label>
      <input
        name="date"
        type="date"
        onChange={(event) => handleDateInput(event)}
        value={value}
        required
      ></input>
    </span>
  );
};

export default Date;
