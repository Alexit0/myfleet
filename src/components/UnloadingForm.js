import React from "react";
import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";
import Address from "./Address";
import Coordinates from "./Coordinates";
import Ref from "./Ref";

import classes from "./LoadingForm.module.css";

const UnloadingForm = () => {
  return (
    <form>
      <label className={classes["div-sections"]}>Unloading Place</label>
      <div className={classes["div-sections"]}>
        <Date dateTitle="Unloading date" />
        <Time timeTitle="From" />
        <Time timeTitle="To" />
        <FixedTerm />
        <Address addressTitle="Unloading address" />
        <Coordinates /> <Ref refTitle="Unloading Reference" />
      </div>
    </form>
  );
};

export default UnloadingForm;
