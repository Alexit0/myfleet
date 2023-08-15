import React from "react";

import classes from "./Input.module.css";


const Coordinates = () => {
  return (
    <form className={classes.form}>
      <label>Coordinates</label>
      <input className={classes.input}></input>
    </form>
  );
};

export default Coordinates;
