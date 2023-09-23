import React from "react";

const Address = (props) => {
  const handleAddressInput = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <input
        name="loadingAddress"
        placeholder={`Enter ${props.addressTitle}`}
        onChange={handleAddressInput}
      ></input>
    </span>
  );
};

export default Address;
