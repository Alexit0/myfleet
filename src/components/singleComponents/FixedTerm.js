import React from "react";

const FixedTerm = ({ index, value, handleInput }) => {
  const handleFixedTerm = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span>
      <label>FIX</label>
      <input
        name="fixedTime"
        type="checkbox"
        onChange={(event) => handleFixedTerm(event)}
        value={value}
      ></input>
    </span>
  );
};

export default FixedTerm;
