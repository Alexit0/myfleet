import React from "react";

import classes from "../OrderForm.module.css";

const Country = (props) => {
  const handleCountry = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span className={classes.country}>
      <select
        name="country"
        onChange={(event) => handleCountry(event, props.index)}
        value={props.value}
      >
        <option value="none" hidden>
          Select Country
        </option>
        <option>Germany</option>
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>Luxembourg</option>
        <option>France</option>
        <option>Italy</option>
        <option>Poland</option>
        <option>Switzerland</option>
        <option>Czech Republic</option>
        <option>Lithuania</option>
      </select>
    </span>
  );
};

export default Country;
