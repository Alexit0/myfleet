import React from "react";

const Coordinates = (props) => {
  const handleCoordinates = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <input
        name="coordinates"
        placeholder="Enter GPS coordinates"
        onChange={(event) => handleCoordinates(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default Coordinates;
