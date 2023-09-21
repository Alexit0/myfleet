import React from "react";

import LoadingBlock from "./LoadingBlock";
import UnloadingBlock from "./UnloadingBlock";

import classes from "./LoadingForm.module.css";

const LoadingForm = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <main>
        <LoadingBlock />
        <div className={classes["unloading-block"]}>
          <UnloadingBlock />
          <UnloadingBlock />
          {/* <UnloadingBlock /> */}
        </div>
        <button className={classes['submit-button']}>Submit</button>
      </main>
    </form>
  );
};

export default LoadingForm;
