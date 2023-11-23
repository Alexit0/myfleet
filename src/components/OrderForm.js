import React, { useReducer } from "react";

import { useSelector } from "react-redux";

import LoadingPlaceBlock from "./LoadingPlaceBlock";
import UnloadingPlaceBlock from "./UnloadingPlaceBlock";

import {
  INITIAL_STATE,
  loadingBlockReducer,
} from "../reducers/loadingBlockReducer";

import { ACTION_TYPES } from "../reducers/loadingBlockActionTypes";

import classes from "./OrderForm.module.css";

const OrderForm = () => {
  const orderData = useSelector((state) => state.order);

  const [loadingBlockData, dispatch] = useReducer(
    loadingBlockReducer,
    INITIAL_STATE
  );

  const handleLoadingInput = (event, index) => {
    dispatch({
      type: ACTION_TYPES.LOADING_INPUT,
      payload: {
        name: event.target.name,
        value: event.target.value,
        index,
      },
    });
  };

  const handleUnloadingInput = (event, index) => {
    dispatch({
      type: ACTION_TYPES.UNLOADING_INPUT,
      payload: {
        name: event.target.name,
        value: event.target.value,
        index,
      },
    });
  };

  const handleAddUnloadingPlace = (index) => {
    dispatch({ type: ACTION_TYPES.ADD_UNLOADING, payload: index });
  };

  const handleRemoveUnloadingPlace = (index) => {
    dispatch({ type: ACTION_TYPES.REMOVE_UNLOADING, payload: index });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loadingBlockData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <main>
        <div className={classes["loading-block"]}>
          {orderData.map((loadingPlace, index) => (
            <LoadingPlaceBlock
              key={index}
              index={index}
              generalInput={handleLoadingInput}
              value={loadingPlace}
            />
          ))}
        </div>

        <div className={classes["unloading-block"]}>
          {loadingBlockData[0].unloadingPlace.map((unloadingPlace, index) => (
            <div key={index}>
              <div className={classes["label-bar"]}>
                <label>
                  <strong>Unloading Place</strong>
                </label>
                <div>
                  <button onClick={() => handleAddUnloadingPlace(index)}>
                    Add
                  </button>

                  {loadingBlockData[0].unloadingPlace.length > 1 && (
                    <button
                      onClick={() => {
                        handleRemoveUnloadingPlace(index);
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {/* <UnloadingPlaceBlock
                generalInput={handleUnloadingInput}
                index={index}
                value={unloadingPlace}
              /> */}
            </div>
          ))}
        </div>

        <button className={classes["submit-button"]}>Submit</button>
      </main>
    </form>
  );
};

export default OrderForm;
