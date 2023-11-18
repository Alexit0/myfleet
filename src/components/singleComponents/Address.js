import React from "react";

const Address = (props) => {
  const handleAddressInput = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <input
        name="address"
        placeholder={`Enter ${props.addressTitle}`}
        onChange={(event) => handleAddressInput(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default Address;
