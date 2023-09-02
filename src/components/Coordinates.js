import React from "react";

import classes from "./Input.module.css";


const Coordinates = () => {
  return (
    <form className={classes.form}>
      <label className={classes.label}>Coordinates</label>
      <input className={classes.input}></input>
    </form>
  );
};

export default Coordinates;
