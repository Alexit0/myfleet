import React from "react";

import classes from "./Input.module.css";

const Date = (props) => {
  return (
    <form className={classes.form}>
      <label className={classes.label}>{props.dateTitle}</label>
      <input className={classes.input} type="date"></input>
    </form>
  );
};

export default Date;
