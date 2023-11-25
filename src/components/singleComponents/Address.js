import React from "react";

const Address = ({ index, value, addressTitle, handleInput }) => {
  const handleAddressInput = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
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
