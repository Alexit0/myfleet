import React from "react";

import classes from "./Input.module.css";


const FixedTerm = () => {
  return (
    <form className={classes.form}>
      <label className={classes.label}>FIX</label>
      <input className={classes.input} type="checkbox"></input>
    </form>
  );
};

export default FixedTerm;
