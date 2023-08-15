import React from "react";

import classes from "./Input.module.css";

const Address = () => {
  return (
    <form className={classes.form}>
      <label>Address line</label>
      <input className={classes.input}></input>
    </form>
  );
};

export default Address;
