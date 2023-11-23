import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLoading, removeLoading } from "../store/orderSlice";
import OrderFields from "./OrderFields";
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

      <OrderFields
        index={props.index}
        value={props.value}
        dateTitle="Loading Date"
        addressTitle="loading address"
      />
    </div>
  );
};

export default LoadingPlaceBlock;
