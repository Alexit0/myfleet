import React from "react";

import classes from "./Input.module.css";

const Cargo = () => {
  return (
    <form className={classes.form}>
      {/* <label>Cargo Details</label> */}
      <input className={classes.cargo} type="text" placeholder="Enter cargo details"></input>
    </form>
  );
};

export default Cargo;
