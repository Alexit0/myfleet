import React from "react";

import classes from "./Input.module.css";


const Cargo = () => {
  return (
    <form className={classes.form}>
      <label className={classes.label}>Cargo Details</label>
      <input className={classes.input} type="text"></input>
    </form>
  );
};

export default Cargo;
