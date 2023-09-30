import React from "react";

import classes from "./CommentsBlock.module.css";

const Ref = (props) => {
  const handleRefInput = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <textarea
        name="comments"
        className={classes.input}
        type="text"
        placeholder="Loading reference / comments ..."
        onChange={handleRefInput}
        index={props.index}
      ></textarea>
    </span>
  );
};

export default Ref;
