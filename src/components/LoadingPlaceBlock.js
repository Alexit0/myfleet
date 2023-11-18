import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";
// import OrderFields from "./OrderFields";

import classes from "./OrderForm.module.css";

const LoadingPlaceBlock = (props) => {
  const handleRemoveUnloading = (event) => {
    event.preventDefault();
  };

  const handleAddUnloading = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes["loading-block"]}>
      <div className={classes["label-bar"]}>
        <label>
          <strong>Loading Place</strong>
        </label>
        <div className={classes.buttons}>
          <button onClick={handleAddUnloading}>Add</button>
          <button onClick={handleRemoveUnloading}>Remove</button>
        </div>
      </div>

      <DateTimeBlock
        dateTitle="Loading Date"
        generalInput={props.generalInput}
      />
      <AddressBlock
        addressTitle="loading address"
        generalInput={props.generalInput}
      />
      <CommentsBlock generalInput={props.generalInput} />
      
    </div>
  );
};

export default LoadingPlaceBlock;
