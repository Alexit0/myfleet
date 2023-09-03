import React from "react";

import classes from "./Input.module.css";

const Address = (props) => {
  return (
    <form className={classes.form}>
      <label className={classes.label}>{props.addressTitle}</label>
      <input className={classes.address}></input>
    </form>
  );
};

export default Address;
