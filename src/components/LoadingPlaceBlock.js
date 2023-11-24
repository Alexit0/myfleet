import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLoading, removeLoading } from "../store/orderSlice";
import OrderFields from "./OrderFields";
import classes from "./OrderForm.module.css";

import UnloadingPlaceBlock from "./UnloadingPlaceBlock";

const LoadingPlaceBlock = ({ index, value }) => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.order);
  const unloadingData = orderData[index].unloadingPlace;

  const handleRemoveLoading = () => {
    dispatch(removeLoading(index));
  };

  const handleAddLoading = () => {
    dispatch(addLoading(index));
    console.log("unloadingData => ", unloadingData);
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
        index={index}
        value={value}
        dateTitle="Loading Date"
        addressTitle="loading address"
      />

      <React.Fragment>
        {unloadingData.map((unloadingPlace, index) => (
          <UnloadingPlaceBlock
            key={index}
            index={index}
            value={unloadingPlace}
          />
        ))}
      </React.Fragment>
    </div>
  );
};

export default LoadingPlaceBlock;
