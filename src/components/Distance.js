import React from "react";

import classes from "./LoadingForm.module.css";

const Distance = () => {
  return (
    <span className={classes.distance}>
      <input type="number" placeholder="km"></input>
    </span>
  );
};

export default Distance;
