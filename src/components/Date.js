import React, { useState } from "react";

const Date = (props) => {
  const [enteredDate, setEnteredDate] = useState();

  const handleDateInput = (event) => {
    setEnteredDate(event.target.value);
  };
  return (
    <span>
      <label>{props.dateTitle}</label>
      <input type="date" onChange={handleDateInput}></input>
    </span>
  );
};

export default Date;
