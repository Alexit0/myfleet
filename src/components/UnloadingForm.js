import React, { useState } from "react";
import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";
import Address from "./Address";
import Coordinates from "./Coordinates";
import Ref from "./Ref";

import classes from "./LoadingForm.module.css";

const handleRemoveUnloading = (event) => {
  event.preventDefault();
};

const handleAddUnloading = (event) => {
  event.preventDefault();
};

const UnloadingForm = () => {
  const [unliadingPlace, setUnloadingPlace] = useState([]);

  return (
    <>
      {}
      <form>
        <label className={classes.section}>
          <strong>Unloading Place</strong>
        </label>
        <div className={classes.section}>
          <Date dateTitle="Unloading date" />
          <Time timeTitle="From" />
          <Time timeTitle="To" />
          <FixedTerm />
          <Address addressTitle="Unloading address" />
          <Coordinates /> <Ref refTitle="Unloading Reference" />
        </div>
        <button onClick={handleAddUnloading}>Add</button>
        <button onClick={handleRemoveUnloading}>Remove</button>
      </form>
    </>
  );
};

export default UnloadingForm;
