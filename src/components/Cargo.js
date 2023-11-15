import React from "react";

const Cargo = (props) => {
  const handleCargoInput = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <input
        name="cargoDetails"
        type="text"
        placeholder="Enter cargo details"
        onChange={(event) => handleCargoInput(event, props.index)}
        value={props.cargoDetails}
      ></input>
    </span>
  );
};

export default Cargo;
