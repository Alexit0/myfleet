import React from "react";

const Comments = ({ index, value, handleInput }) => {
  const handleRefInput = (event) => {
    handleInput({
      name: event.target.name,
      value: event.target.value,
      index,
    });
  };
  return (
    <span>
      <textarea
        name="comments"
        type="text"
        placeholder={"Loading reference / comments ..."}
        onChange={(event) => handleRefInput(event)}
        value={value}
      ></textarea>
    </span>
  );
};

export default Comments;
