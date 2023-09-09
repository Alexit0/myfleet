import React from "react";

const Address = (props) => {
  return (
    <form>
      <input placeholder={`Enter ${props.addressTitle}`}></input>
    </form>
  );
};

export default Address;
