import React from "react";

import classes from "./Input.module.css";

const Ref = (props) => {
  return (
    <form className={classes.form}>
      <label>{props.refTitle}</label>
      <input className={classes.input}></input>
    </form>
  );
};

export default Ref;
