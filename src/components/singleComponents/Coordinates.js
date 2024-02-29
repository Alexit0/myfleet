import React from "react";

const Coordinates = ({ index, value, handleInput }) => {
  console.log(value)
  const handleCoordinates = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span>
      <input
        name="coordinates"
        placeholder="Enter GPS coordinates"
        onChange={(event) => handleCoordinates(event)}
        value={value}
      ></input>
    </span>
  );
};

export default Coordinates;
