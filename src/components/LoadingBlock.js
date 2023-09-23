import React, { useReducer } from "react";

import DateTimeBlock from "./DateTimeBlock";
import AddressBlock from "./AddressBlock";
import CommentsBlock from "./CommentsBlock";

import {
  INITIAL_STATE,
  loadingBlockReducer,
} from "../reducers/loadingBlockReducer";

import { ACTION_TYPES } from "../reducers/loadingBlockActionTypes";

import classes from "./LoadingForm.module.css";

const LoadingBlock = () => {
  const [loadingBlockData, dispatch] = useReducer(
    loadingBlockReducer,
    INITIAL_STATE
  );

  const getLoadingDate = (event) => {
    dispatch({ type: ACTION_TYPES.DATE_INPUT, payload: event.target.value });
  };

  const getRef = (event) => {
    dispatch({ type: ACTION_TYPES.REF_INPUT, payload: event.target.value });
    console.log(loadingBlockData.comments)
  };

  const handleRemoveUnloading = (event) => {
    event.preventDefault();
  };

  const handleAddUnloading = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes["loading-block"]}>
      <div className={classes["label-bar"]}>
        <label>
          <strong>Loading Place</strong>
        </label>
        <div className={classes.buttons}>
          <button onClick={handleAddUnloading}>Add</button>
          <button onClick={handleRemoveUnloading}>Remove</button>
        </div>
      </div>

      <DateTimeBlock dateTitle="Loading Date" loadingDate={getLoadingDate} />
      <AddressBlock addressTitle="loading address" />
      <CommentsBlock loadingRef={getRef}/>
    </div>
  );
};

export default LoadingBlock;
