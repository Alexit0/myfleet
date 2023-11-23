import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const Coordinates = ({ index, value }) => {
  const dispatch = useDispatch();
  console.log("value ==> ", value);
  const handleCoordinates = (event) => {
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
      <input
        name="coordinates"
        placeholder="Enter GPS coordinates"
        onChange={(event) => handleCoordinates(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Coordinates;
