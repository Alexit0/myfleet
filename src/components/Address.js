import React from "react";

import classes from "./Input.module.css";

const Address = (props) => {
  return (
    <form className={classes.form}>
      <label>{props.addressTitle}</label>
      <input className={classes.input}></input>
    </form>
  );
};

export default Address;
