import React from "react";

const FixedTerm = (props) => {
  const handleFixedTerm = (event) => {
    props.generalInput(event);
  };
  return (
    <span>
      <label>FIX</label>
      <input
        name="fixedTime"
        type="checkbox"
        onChange={handleFixedTerm}
        index={props.index}
      ></input>
    </span>
  );
};

export default FixedTerm;
