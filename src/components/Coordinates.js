import React from "react";

const Coordinates = (props) => {
  const handleCoordinates = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <input
        name="coordinates"
        placeholder="Enter GPS coordinates"
        onChange={handleCoordinates}
        index={props.index}
      ></input>
    </span>
  );
};

export default Coordinates;
