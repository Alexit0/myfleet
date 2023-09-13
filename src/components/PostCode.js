import React from "react";

import classes from './LoadingForm.module.css'

const PostCode = () => {
  return (
    <span className={classes['post-code']}>
      <input placeholder="Post code"></input>
    </span>
  );
};

export default PostCode;
