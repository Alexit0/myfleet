import React from "react";

import classes from "./CommentsBlock.module.css";

const Ref = (props) => {
  return (
    <form >
      <textarea
        className={classes.input}
        type="text"
        placeholder="Loading reference / comments ..."
      ></textarea>
    </form>
  );
};

export default Ref;
