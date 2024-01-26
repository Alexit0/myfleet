import React from "react";

import classes from "../OrderForm.module.css";

const PostCode = ({ index, value, handleInput }) => {
  const handlePostCode = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span className={classes["post-code"]}>
      <input
        name="postCode"
        placeholder="Post code"
        onChange={(event) => handlePostCode(event)}
        value={value}
        required
      ></input>
    </span>
  );
};

export default PostCode;
