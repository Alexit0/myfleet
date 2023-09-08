import React from "react";

import classes from "./Input.module.css";

const Coordinates = () => {
  return (
    <form className={classes.form}>
      <input className={classes.coordinates} placeholder="Enter GPS coordinates"></input>
    </form>
  );
};

export default Coordinates;
