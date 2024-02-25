import React from "react";

import classes from "../OrderForm.module.css";

const TypeSelect = ({ index, value, handleInput }) => {
    const handleType = (event) => {
      handleInput({
        name: event.target.name,
        value: event.target.value,
        index,
      });
    };
  return (
    <span className={classes.country}>
      <select
        name="datetime"
        // onChange={(event) => handleType(event)}
        value={value}
        required
      >
        <option value="" disabled 
        defaultValue
        >
          Select Type
        </option>
        <option>Loading</option>
        <option>Unloading</option>
        <option>Customs</option>
        <option>Pallets</option>
        <option>Documents</option>
      </select>
    </span>
  );
};

export default TypeSelect;
