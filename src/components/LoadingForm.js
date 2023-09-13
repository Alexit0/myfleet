import React from "react";

import LoadingBlock from "./LoadingBlock";

import classes from "./LoadingForm.module.css";

const LoadingForm = (props) => {
  return (
    <form>
      <div>
        <LoadingBlock />
      </div>
      
    </form>
  );
};

export default LoadingForm;
