import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";

import classes from "./LoadingForm.module.css";

const LoadingForm = (props) => {
  const handleRemoveUnloading = (event) => {
    event.preventDefault();
  };

  const handleAddUnloading = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form}>
      <div>
        <div className={classes["label-bar"]}>
          <label>
            <strong>Loading Place</strong>
          </label>
          <div className={classes.buttons}>
            <button onClick={handleAddUnloading}>Add</button>
            <button onClick={handleRemoveUnloading}>Remove</button>
          </div>
        </div>

        <DateTimeBlock dateTitle="Loading Date" />
        <AddressBlock addressTitle="loading address" />
        <CommentsBlock />
      </div>
    </form>
  );
};

export default LoadingForm;
