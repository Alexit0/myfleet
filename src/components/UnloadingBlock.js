import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";

import classes from "./LoadingForm.module.css";

const UnloadingBlock = () => {
  const handleRemoveUnloading = (event) => {
    event.preventDefault();
  };

  const handleAddUnloading = (event) => {
    event.preventDefault();
  };
  return (
    <div >
      <div className={classes["label-bar"]}>
        <label>
          <strong>Unloading Place</strong>
        </label>
        <div>
          <button onClick={handleAddUnloading}>Add</button>
          <button onClick={handleRemoveUnloading}>Remove</button>
        </div>
      </div>

      <DateTimeBlock dateTitle="Unloading Date" />
      <AddressBlock addressTitle="unloading address" />
      <CommentsBlock />
    </div>
  );
};

export default UnloadingBlock;
