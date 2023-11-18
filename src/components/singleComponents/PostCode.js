import React from "react";

import classes from "../OrderForm.module.css";

const PostCode = (props) => {
  const handlePostCode = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span className={classes["post-code"]}>
      <input
        name="postCode"
        placeholder="Post code"
        onChange={(event) => handlePostCode(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default PostCode;
