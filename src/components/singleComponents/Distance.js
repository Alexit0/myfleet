import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

import classes from "../OrderForm.module.css";

const Distance = ({ index, value }) => {
  const dispatch = useDispatch();
  console.log("value ==> ", value);
  const handleDistance = (event) => {
    dispatch(
      loadingInput({
        name: event.target.name,
        value: event.target.value,
        index,
      })
    );
  };
  return (
    <span className={classes.distance}>
      <input
        name="distance"
        type="number"
        placeholder="km"
        onChange={(event) => handleDistance(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Distance;
