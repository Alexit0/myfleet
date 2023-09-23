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

  const handleGeneralInput = (event) => {
    dispatch({
      type: ACTION_TYPES.GENERAL_INPUT,
      payload: { name: event.target.name, value: event.target.value },
    });
    console.log(loadingBlockData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("=> ", loadingBlockData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <main>
        <LoadingBlock generalInput={handleGeneralInput} />
        <div className={classes["unloading-block"]}>
          <UnloadingBlock />
        </div>
        <button className={classes["submit-button"]}>Submit</button>
      </main>
    </form>
  );
};

export default LoadingForm;
