import React from "react";

import classes from "./CommentsBlock.module.css";

const Ref = (props) => {
  const handleRefInput = (event) => {
    props.loadingRef(event);
  };
  return (
    <span>
      <textarea
        className={classes.input}
        type="text"
        placeholder="Loading reference / comments ..."
        onChange={handleRefInput}
      ></textarea>
    </span>
  );
};

export default Ref;
