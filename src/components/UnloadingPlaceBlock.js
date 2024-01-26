import React from "react";

import OrderFields from "./OrderFields";
import { useDispatch, useSelector } from "react-redux";
import {
  addUnloading,
  removeUnloading,
  unloadingInput,
} from "../store/orderSlice";

import classes from "./OrderForm.module.css";

const UnloadingPlaceBlock = ({ value, index, parentIndex, onChange }) => {
  const unloadingData = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const unloadingInputHandle = ({ name, value, index }) => {
    dispatch(unloadingInput({ name, value, index, parentIndex }));
  };

  const handleAddUnloading = (event) => {
    dispatch(addUnloading({ index, parentIndex }));
    event.preventDefault();
  };

  const handleRemoveUnloading = () => {
    dispatch(removeUnloading({ index, parentIndex }));
  };
  return (
    <div>
      {
        <div key={index} className={classes["unloading-fields"]}>
          <div className={classes["label-bar"]}>
            <label>Unloading place {index !== 0 && index + 1}</label>
            <div>
              {unloadingData[parentIndex].unloadingPlace.length > 1 && (
                <button
                  onClick={() => {
                    handleRemoveUnloading();
                  }}
                >
                  Remove
                </button>
              )}
              <button onClick={(event) => handleAddUnloading(event)}>
                Add
              </button>
            </div>
          </div>

          <OrderFields
            handleInput={unloadingInputHandle}
            key={index}
            index={index}
            value={value}
            dateTitle="Unolading Date"
            addressTitle="unloading address"
            onChange={onChange}

          />
        </div>
      }
    </div>
  );
};

export default UnloadingPlaceBlock;
