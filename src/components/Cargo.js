import React from "react";

const Cargo = (props) => {
  const handleCargoInput = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <input
        name="cargoDetails"
        type="text"
        placeholder="Enter cargo details"
        onChange={handleCargoInput}
        index={props.index}
      ></input>
    </span>
  );
};

export default Cargo;
