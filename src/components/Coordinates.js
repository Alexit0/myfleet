import React from "react";

import classes from "./Input.module.css";

const Coordinates = () => {
  return (
    <form className={classes.form}>
      <label className={classes["label-no-block"]}>GPS</label>
      <input className={classes.coordinates}></input>
    </form>
  );
};

export default Coordinates;
