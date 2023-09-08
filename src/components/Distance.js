import React from "react";

import classes from "./Input.module.css";

const Distance = () => {
  return (
    <form className={classes.form}>
      <input
        className={classes.distance}
        type="number"
        placeholder="km"
      ></input>
    </form>
  );
};

export default Distance;
