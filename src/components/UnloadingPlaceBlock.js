import React from "react";

import OrderFields from "./OrderFields";
import { useDispatch } from "react-redux";
import { addUnloading, removeUnloading } from "../store/orderSlice";

import classes from "./OrderForm.module.css";

const UnloadingPlaceBlock = ({ value, index, parentIndex }) => {
  const dispatch = useDispatch();

  const handleAddUnloading = () => {
    dispatch(addUnloading({ index, parentIndex }));
  };

  const handleRemoveUnloading = () => {
    dispatch(removeUnloading({ index, parentIndex }));
  };
  return (
    <div className={classes["unloading-block"]}>
      {
        <div key={index}>
          <div className={classes["label-bar"]}>
            <label>
              <strong>Unloading Place</strong>
            </label>
            <div>
              <button onClick={() => handleAddUnloading()}>Add</button>
              <button
                onClick={() => {
                  handleRemoveUnloading();
                }}
              >
                Remove
              </button>
            </div>
          </div>

          <OrderFields
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
