import React from "react";
import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";
import Address from "./Address";
import PostCode from "./PostCode";
import Coordinates from "./Coordinates";
import Cargo from "./Cargo";
import Ref from "./Ref";
import Country from "./Country";
import Distance from "./Distance";

import classes from "./LoadingForm.module.css";

const LoadingForm = () => {
  const handleRemoveUnloading = (event) => {
    event.preventDefault();
  };

  const handleAddUnloading = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form}>
      <label className={classes.label}>
        <strong>Loading Place</strong>
      </label>
      <div className={classes.buttons}>
        <button onClick={handleAddUnloading}>Add</button>
        <button onClick={handleRemoveUnloading}>Remove</button>
      </div>

      <div className={classes.section}>
        <Date dateTitle="Loading date" />
        <Time timeTitle="From " />
        <Time timeTitle="To " />
        <FixedTerm />
      </div>
      <div className={classes.section}>
        <Address addressTitle="Loading Address" />
      </div>
      <div className={classes.address2}>
        <PostCode />
        <Country />
        <Distance />
      </div>
      <div className={classes.section}>
        <Coordinates />
      </div>
      <div className={classes.section}>
        <Cargo />
      </div>
      <div className={classes.section}>
        <Ref refTitle="Loading Reference" />
      </div>
    </form>
  );
};

export default LoadingForm;
