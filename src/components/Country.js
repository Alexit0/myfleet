import React from "react";

import classes from "./Input.module.css";

const Country = () => {
  return (
    <form className={classes.form}>
      <select className={classes.country}>
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
    </form>
  );
};

export default Country;
