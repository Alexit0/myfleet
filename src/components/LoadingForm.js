import React from "react";

import LoadingBlock from "./LoadingBlock";
import UnloadingBlock from "./UnloadingBlock";

import classes from "./LoadingForm.module.css";

const LoadingForm = (props) => {
  return (
    <form>
      <main>
        <LoadingBlock />
        <UnloadingBlock />
      </main>
    </form>
  );
};

export default LoadingForm;
