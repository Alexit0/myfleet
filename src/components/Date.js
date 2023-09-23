import React from "react";

const Date = (props) => {
  const handleDateInput = () => {
    props.loadingDate();
  };
  return (
    <span>
      <label>{props.dateTitle}</label>
      <input type="date" onChange={handleDateInput}></input>
    </span>
  );
};

export default Date;
