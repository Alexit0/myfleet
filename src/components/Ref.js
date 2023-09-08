import React from "react";

import classes from "./Input.module.css";

const Ref = (props) => {
  return (
    <form className={classes.form}>
      <textarea
        className={classes.comments}
        type="text"
        placeholder="Loading reference / comments ..."
      ></textarea>
    </form>
  );
};

export default Ref;
