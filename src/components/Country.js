import React from "react";

import classes from "./LoadingForm.module.css";

const Country = () => {
  return (
    <span className={classes.country}>
      <select>
        <option value="none" selected disabled hidden>
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
