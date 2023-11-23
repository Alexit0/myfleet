import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const Address = ({ index, value, addressTitle }) => {
  const dispatch = useDispatch();

  const handleAddressInput = (event) => {
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
        name="address"
        placeholder={`Enter ${addressTitle}`}
        onChange={(event) => handleAddressInput(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Address;
