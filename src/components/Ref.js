import React from "react";

import classes from "./CommentsBlock.module.css";

const Ref = (props) => {
  const handleRefInput = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <textarea
        name="comments"
        className={classes.input}
        type="text"
        placeholder={"Loading reference / comments ..."}
        onChange={(event) => handleRefInput(event, props.index)}
        value={props.comments}
      ></textarea>
    </span>
  );
};

export default Ref;
