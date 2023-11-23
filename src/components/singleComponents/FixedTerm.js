import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const FixedTerm = ({ index, value }) => {
  const dispatch = useDispatch();

  const handleFixedTerm = (event) => {
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
      <label>FIX</label>
      <input
        name="fixedTime"
        type="checkbox"
        onChange={(event) => handleFixedTerm(event)}
        value={value}
      ></input>
    </span>
  );
};

export default FixedTerm;
