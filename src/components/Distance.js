import React from "react";

import classes from "./LoadingForm.module.css";

const Distance = (props) => {
  const handleDistance = (event) => {
    props.generalInput(event);
  };
  return (
    <span className={classes.distance}>
      <input
        name="distance"
        type="number"
        placeholder="km"
        onChange={handleDistance}
      ></input>
    </span>
  );
};

export default Distance;
