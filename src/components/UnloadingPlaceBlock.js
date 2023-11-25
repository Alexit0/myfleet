import React from "react";

import OrderFields from "./OrderFields";
import { useDispatch, useSelector } from "react-redux";
import {
  addUnloading,
  removeUnloading,
  unloadingInput,
} from "../store/orderSlice";

import classes from "./OrderForm.module.css";

const UnloadingPlaceBlock = ({ value, index, parentIndex }) => {
  const unloadingData = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const unloadingInputHandle = ({ name, value, index }) => {
    dispatch(unloadingInput({ name, value, index, parentIndex }));
  };

  const handleAddUnloading = () => {
    dispatch(addUnloading({ index, parentIndex }));
    console.log(unloadingData[parentIndex]);
  };

  const handleRemoveUnloading = () => {
    dispatch(removeUnloading({ index, parentIndex }));
  };
  return (
    <div>
      {
        <div key={index}>
          <div className={classes["label-bar"]}>
            <label>
              <strong>Unloading Place</strong>
            </label>
            <div>
              <button onClick={() => handleAddUnloading()}>Add</button>
              {unloadingData[parentIndex].unloadingPlace.length > 1 && (
                <button
                  onClick={() => {
                    handleRemoveUnloading();
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>

          <OrderFields
            handleInput={unloadingInputHandle}
            key={index}
            index={index}
            value={value}
            dateTitle="Unolading Date"
            addressTitle="Unloading address"
          />
        </div>
      }
    </div>
  );
};

export default UnloadingPlaceBlock;
