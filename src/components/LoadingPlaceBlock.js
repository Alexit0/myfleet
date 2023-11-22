import React from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";
import Comments from "./singleComponents/Comments";
// import OrderFields from "./OrderFields";

import { useDispatch, useSelector } from "react-redux";
import { addLoading, removeLoading, loadingInput } from "../store/orderSlice";

import classes from "./OrderForm.module.css";

const LoadingPlaceBlock = (props) => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.order);

  const handleRemoveLoading = () => {
    dispatch(removeLoading(props.index));
  };

  const handleAddLoading = () => {
    dispatch(addLoading(props.index));
  };

  return (
    <div className={classes["loading-block"]}>
      <div className={classes["label-bar"]}>
        <label>
          <strong>Loading Place</strong>
        </label>
        <div className={classes.buttons}>
          <button onClick={() => handleAddLoading()}>Add</button>
          {orderData.length > 1 && (
            <button onClick={() => handleRemoveLoading()}>Remove</button>
          )}
        </div>
      </div>

      <DateTimeBlock
        dateTitle="Loading Date"
        generalInput={props.generalInput}
      />
      <AddressBlock
        addressTitle="loading address"
        generalInput={props.generalInput}
      />
      {/* <CommentsBlock generalInput={props.generalInput} /> */}
      <Comments generalInput={props.generalInput} index={props.index} />
    </div>
  );
};

export default LoadingPlaceBlock;
