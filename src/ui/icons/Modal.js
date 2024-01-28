import React from "react";

import classes from "./Modal.module.css";

export const LeavePageModal = ({ onCancel, onConfirm }) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>
        <p>
          Are you sure you want to leave? Your unsaved changes will be lost.
        </p>
        <div className={classes.buttons}>
          <button 
          className="knopf buttons standard pill" 
          onClick={onCancel}>
            Cancel
          </button>
          <button 
          className="knopf buttons standard pill" 
          onClick={onConfirm}>
            Leave
          </button>
        </div>
      </div>
    </div>
  );
};
