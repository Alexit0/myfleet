import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

const Comments = ({ index, value }) => {
  const dispatch = useDispatch();
  console.log("value ==> ", value);
  const handleRefInput = (event) => {
    dispatch(
      loadingInput({
        name: event.target.name,
        value: event.target.value,
        index,
      })
    );
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
