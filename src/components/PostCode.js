import React from "react";

import classes from "./Input.module.css";

const PostCode = () => {
  return (
    <form className={classes.form}>
      <label className={classes.label}>Post Code</label>
      <input className={classes.input}></input>
    </form>
  );
};

export default PostCode;
