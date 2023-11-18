import React from "react";

import classes from "../OrderForm.module.css";

const Distance = (props) => {
  const handleDistance = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span className={classes.distance}>
      <input
        name="distance"
        type="number"
        placeholder="km"
        onChange={(event) => handleDistance(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default Distance;
