import React from "react";
import Date from "./Date";
import Time from "./Time";
import FixedTerm from "./FixedTerm";
import Address from "./Address";
import PostCode from "./PostCode";
import Coordinates from "./Coordinates";
import Cargo from "./Cargo";
import Ref from "./Ref";

import classes from "./LoadingForm.module.css";
import Country from "./Country";

const LoadingForm = () => {
  const handleRemoveUnloading = (event) => {
    event.preventDefault();
  };

  const handleAddUnloading = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form}>
      <label className={classes.section}>
        <strong>Loading Place</strong>
      </label>
      <div className={classes.section}>
        <Date dateTitle="Loading date" />
        <Time timeTitle="From " />
        <Time timeTitle="To " />
        <FixedTerm />
      </div>
      <div className={classes.address}>
        <Address addressTitle="Loading Address" />
      </div>
      <div className={classes.section}>
        <PostCode />
        <Country />
      </div>
      <div className={classes.section}>
        <Coordinates />
      </div>
      <div className={classes.section}>
        <Cargo />
        <Ref refTitle="Loading Reference" />
      </div>
      <button onClick={handleAddUnloading}>Add</button>
      <button onClick={handleRemoveUnloading}>Remove</button>
    </form>
  );
};

export default LoadingForm;
