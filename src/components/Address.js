import React from "react";

import classes from "./Input.module.css";

const Address = (props) => {
  return (
    <form className={classes.form}>
      <input
        className={classes.address}
        placeholder={`Enter ${props.addressTitle}`}
      ></input>
    </form>
  );
};

export default Address;
