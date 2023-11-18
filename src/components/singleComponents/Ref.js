import React from "react";


const Ref = (props) => {
  const handleRefInput = (event, index) => {
    props.generalInput(event, index);
  };
  return (
    <span>
      <textarea
        name="comments"
        type="text"
        placeholder={"Loading reference / comments ..."}
        onChange={(event) => handleRefInput(event, props.index)}
        value={props.value}
      ></textarea>
    </span>
  );
};

export default Ref;
