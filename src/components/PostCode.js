import React from "react";

import classes from "./Input.module.css";

const PostCode = () => {
  return (
    <form className={classes.form}>
      {/* <label>Post Code</label> */}
      <input className={classes.postcode} placeholder="Post code"></input>
    </form>
  );
};

export default PostCode;
