import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLoading, removeLoading, loadingInput } from "../store/orderSlice";
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

  const handleAddLoading = (event) => {
    dispatch(addLoading(props.index));
    event.preventDefault();
  };

  return (
    <div className={classes.fields}>
      <div className={classes["loading-fields"]}>
        <div className={classes["label-bar"]}>
          <label>Loading Place</label>
          <div className={classes.buttons}>
            {orderData.length > 1 && (
              <button onClick={() => handleRemoveLoading()}>Remove</button>
            )}
            <button onClick={(event) => handleAddLoading(event)}>Add</button>
          </div>
        </div>

        <OrderFields
          handleInput={loadingInputHandle}
          index={props.index}
          value={props.value}
          dateTitle="Loading Date"
          addressTitle="loading address"
          onChange={props.onChange}
        />
      </div>

      <div className={classes["unloading-block"]}>
        {unloadingData.map((unloadingPlace, index) => (
          <UnloadingPlaceBlock
            parentIndex={parentIndex}
            key={index}
            index={index}
            value={unloadingPlace}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingPlaceBlock;
