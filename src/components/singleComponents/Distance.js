import React from "react";

import classes from "../OrderForm.module.css";

const Distance = ({ index, value, handleInput }) => {
  const handleDistance = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span className={classes.distance}>
      <input
        name="distance"
        type="number"
        placeholder="km"
        onChange={(event) => handleDistance(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Distance;
