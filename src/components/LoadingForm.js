import React, { useReducer } from "react";

import LoadingBlock from "./LoadingBlock";
import UnloadingBlock from "./UnloadingBlock";

import {
  FULL_INITIAL_STATE,
  loadingBlockReducer,
} from "../reducers/loadingBlockReducer";

import { ACTION_TYPES } from "../reducers/loadingBlockActionTypes";

import classes from "./LoadingForm.module.css";

const LoadingForm = () => {
  const [loadingBlockData, dispatch] = useReducer(
    loadingBlockReducer,
    FULL_INITIAL_STATE
  );

  const handleGeneralInput = (event) => {
    dispatch({
      type: ACTION_TYPES.GENERAL_INPUT,
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const handleAddUnloadingPlace = (event, index) => {
    event.preventDefault();
    dispatch({ type: ACTION_TYPES.ADD_UNLOADING });
    console.log(+index);
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
        <LoadingBlock generalInput={handleGeneralInput} />

        <div className={classes["unloading-block"]}>
          {loadingBlockData[0].unloadingPlace.map(
            (singleUnloadingPlace, index) => (
              <div key={index}>
                <div className={classes["label-bar"]}>
                  <label>
                    <strong>Unloading Place</strong>
                  </label>
                  <div>
                    {loadingBlockData[0].unloadingPlace.length - 1 ===
                      index && (
                      <button onClick={handleAddUnloadingPlace}>Add</button>
                    )}
                    <button
                      onClick={(event) => {
                        handleRemoveUnloadingPlace(index);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <UnloadingBlock />
              </div>
            )
          )}
        </div>

        <button className={classes["submit-button"]}>Submit</button>
      </main>
    </form>
  );
};

export default LoadingForm;
