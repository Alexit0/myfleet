import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const CargoDetails = ({ index, value }) => {
  const dispatch = useDispatch();
  console.log("value ==> ", value);
  const handleCargoInput = (event) => {
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
        name="cargoDetails"
        type="text"
        placeholder="Enter cargo details"
        onChange={(event) => handleCargoInput(event)}
        value={value}
      ></input>
    </span>
  );
};

export default CargoDetails;
