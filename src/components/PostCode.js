import React from "react";

import classes from "./LoadingForm.module.css";

const PostCode = (props) => {
  const handlePostCode = (event) => {
    props.generalInput(event);
  };
  return (
    <span className={classes["post-code"]}>
      <input
        name="postCode"
        placeholder="Post code"
        onChange={handlePostCode}
      ></input>
    </span>
  );
};

export default PostCode;
