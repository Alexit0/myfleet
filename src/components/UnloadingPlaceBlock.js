import React from "react";

import OrderFields from "./OrderFields";
import { useDispatch, useSelector } from "react-redux";
import { addLoading, removeLoading } from "../store/orderSlice";

import classes from "./OrderForm.module.css";

const UnloadingPlaceBlock = (props, { index }) => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.order);

  const handleRemoveLoading = () => {
    dispatch(removeLoading(index));
  };

  const handleAddLoading = () => {
    dispatch(addLoading(index));
  };
  return (
    <div className={classes["unloading-block"]}>
      <div key={index}>
        <div className={classes["label-bar"]}>
          <label>
            <strong>Unloading Place</strong>
          </label>
          <div>
            <button onClick={() => handleAddLoading(index)}>Add</button>
            <button
              onClick={() => {
                handleRemoveLoading(index);
              }}
            >
              Remove
            </button>
          </div>
        </div>

        <OrderFields
          key={index}
          index={index}
          value={props.value}
          dateTitle="Unolading Date"
          addressTitle="Unloading address"
        />
      </div>
    </div>
  );
};

export default UnloadingPlaceBlock;
