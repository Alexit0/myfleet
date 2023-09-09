import React from "react";

const Date = (props) => {
  return (
    <form>
      <label>{props.dateTitle}</label>
      <input type="date"></input>
    </form>
  );
};

export default Date;
