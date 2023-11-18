import React from "react";

const Date = (props) => {
  const handleDateInput = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <label>{props.dateTitle}</label>
      <input
        name="date"
        type="date"
        onChange={(event) => handleDateInput(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default Date;
