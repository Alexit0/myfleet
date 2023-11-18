import React from "react";

const FixedTerm = (props) => {
  const handleFixedTerm = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <label>FIX</label>
      <input
        name="fixedTime"
        type="checkbox"
        onChange={(event) => handleFixedTerm(event, props.index)}
        value={props.value}
      ></input>
    </span>
  );
};

export default FixedTerm;
