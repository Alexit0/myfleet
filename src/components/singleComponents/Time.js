import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const Time = ({ index, value, timeTitle, name }) => {
  const dispatch = useDispatch();

  const handleTime = (event) => {
    dispatch(
      loadingInput({
        name: event.target.name,
        value: event.target.value,
        index,
      })
    );
  };
  return (
    <span>
      <label>{timeTitle}</label>
      <input
        name={name}
        type="time"
        onChange={(event) => handleTime(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Time;
