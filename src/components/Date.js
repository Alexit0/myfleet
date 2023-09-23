import React from "react";

const Date = (props) => {
  const handleDateInput = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <label>{props.dateTitle}</label>
      <input name="date" type="date" onChange={handleDateInput}></input>
    </span>
  );
};

export default Date;
