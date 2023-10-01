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
        index={props.index}
      ></input>
    </span>
  );
};

export default Address;
