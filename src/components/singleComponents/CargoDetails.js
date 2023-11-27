import React from "react";

const CargoDetails = ({ index, value, handleInput }) => {
  const handleCargoInput = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span>
      <input
        name="cargoDetails"
        type="text"
        placeholder="Enter cargo details"
        onChange={(event) => handleCargoInput(event)}
        value={value}
      ></input>
    </span>
  );
};

export default CargoDetails;
