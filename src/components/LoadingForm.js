import React from "react";
import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";
import Address from "./Address";
import Coordinates from "./Coordinates";
import Cargo from "./Cargo";
import Ref from "./Ref";

import classes from "./LoadingForm.module.css";

const LoadingForm = () => {
  return (
    <form>
      <label className={classes["div-sections"]}>Loading Place</label>
      <div className={classes["div-sections"]}>
        <div>
          <Date />
        </div>
        <Time time="From " />
        <Time time="To " />
        <FixedTerm />
        <Address />
        <Coordinates />
      </div>
      <div className={classes["div-sections"]}>
        <Address />
        <Cargo />
        <Ref />
      </div>
    </form>
  );
};

export default LoadingForm;
