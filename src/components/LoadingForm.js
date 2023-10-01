import React, { useReducer } from "react";

import LoadingBlock from "./LoadingBlock";
import UnloadingBlock from "./UnloadingBlock";

import {
  INITIAL_STATE,
  loadingBlockReducer,
} from "../reducers/loadingBlockReducer";

import { ACTION_TYPES } from "../reducers/loadingBlockActionTypes";

import classes from "./LoadingForm.module.css";

const LoadingForm = () => {
  const [loadingBlockData, dispatch] = useReducer(
    loadingBlockReducer,
    INITIAL_STATE
  );

  const handleLoadingInput = (event, index) => {
    dispatch({
      type: ACTION_TYPES.LOADING_INPUT,
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const handleUnloadingInput = (event) => {
    dispatch({
      type: ACTION_TYPES.UNLOADING_INPUT,
      payload: {
        name: event.target.name,
        value: event.target.value,
        index: event.target.attributes.index.value
      },
    });
  };

  const handleAddUnloadingPlace = (event, index) => {
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
        <LoadingBlock generalInput={handleLoadingInput} />

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
              <UnloadingBlock
                generalInput={handleUnloadingInput}
                index={index}
              />
            </div>
          ))}
        </div>

        <button className={classes["submit-button"]}>Submit</button>
      </main>
    </form>
  );
};

export default LoadingForm;
