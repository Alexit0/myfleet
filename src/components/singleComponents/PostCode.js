import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

import classes from "../OrderForm.module.css";

const PostCode = ({ index, value }) => {
  const dispatch = useDispatch();

  const handlePostCode = (event) => {
    dispatch(
      loadingInput({
        name: event.target.name,
        value: event.target.value,
        index,
      })
    );
  };
  return (
    <span className={classes["post-code"]}>
      <input
        name="postCode"
        placeholder="Post code"
        onChange={(event) => handlePostCode(event)}
        value={value}
      ></input>
    </span>
  );
};

export default PostCode;
