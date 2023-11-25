import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLoading,
  removeLoading,
  loadingInput,
} from "../store/orderSlice";
import OrderFields from "./OrderFields";
import classes from "./OrderForm.module.css";

import UnloadingPlaceBlock from "./UnloadingPlaceBlock";

const LoadingPlaceBlock = (props) => {
  const orderData = useSelector((state) => state.order);
  const unloadingData = orderData[props.index].unloadingPlace;
  const parentIndex = props.index;

  const dispatch = useDispatch();

  const loadingInputHandle = ({ name, value, index }) => {
    dispatch(loadingInput({ name, value, index }));
  };

  const handleRemoveLoading = () => {
    dispatch(removeLoading(props.index));
  };

  const handleAddLoading = () => {
    dispatch(addLoading(props.index));
  };

  return (
    <div>
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
        handleInput={loadingInputHandle}
        index={props.index}
        value={props.value}
        dateTitle="Loading Date"
        addressTitle="loading address"
      />

      <React.Fragment>
        {unloadingData.map((unloadingPlace, index) => (
          <UnloadingPlaceBlock
            parentIndex={parentIndex}
            key={index}
            index={index}
            value={unloadingPlace}
            className={classes["unloading-block"]}
          />
        ))}
      </React.Fragment>
    </div>
  );
};

export default LoadingPlaceBlock;
