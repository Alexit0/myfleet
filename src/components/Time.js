import React from "react";

import classes from "./Input.module.css";

const Time = (props) => {
  return (
    <form className={classes.form}>
      <label>{props.timeTitle}</label>
      <input className={classes.input} type="time"></input>
    </form>
  );
};

export default Time;
