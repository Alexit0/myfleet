import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const Date = ({ index, value, dateTitle }) => {
  const dispatch = useDispatch();

  const handleDateInput = (event) => {
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
      <label>{dateTitle}</label>
      <input
        name="date"
        type="date"
        onChange={(event) => handleDateInput(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Date;
