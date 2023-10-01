import React from "react";

import classes from "./LoadingForm.module.css";

const Country = (props) => {
  const handleCountry = (event) => {
    props.generalInput(event);
  };
  return (
    <span className={classes.country}>
      <select name="country" onChange={handleCountry} index={props.index}>
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
