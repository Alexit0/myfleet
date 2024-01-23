import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./Modal.module.css";

export const LeavePageModal = ({ onCancel, onConfirm }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <p>
          Are you sure you want to leave? Your unsaved changes will be lost.
        </p>
        <button className={classes.button} onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.button} onClick={onConfirm}>
          Leave
        </button>
      </div>
    </div>
  );
};
