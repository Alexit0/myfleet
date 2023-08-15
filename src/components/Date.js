import React from "react";

import classes from "./Input.module.css";

const Date = () => {
  return (
    <form className={classes.form}>
      <label>Date</label>
      <input className={classes.input} type="date"></input>
    </form>
  );
};

export default Date;
