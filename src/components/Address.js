import React from "react";

const Address = (props) => {
  return (
    <span>
      <input placeholder={`Enter ${props.addressTitle}`}></input>
    </span>
  );
};

export default Address;
