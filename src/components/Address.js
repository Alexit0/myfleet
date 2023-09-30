import React from "react";

const Address = (props) => {
  const handleAddressInput = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <input
        name="address"
        placeholder={`Enter ${props.addressTitle}`}
        onChange={handleAddressInput}
      ></input>
    </span>
  );
};

export default Address;
