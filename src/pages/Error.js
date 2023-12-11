import React from "react";
import MainNavigation from "../components/MainNavigation";

import classes from "./Error.module.css";

function ErrorPage() {
  return (
    <React.Fragment>
      <MainNavigation />
      <div className={classes.main}>
        <h1>Error occured</h1>
        <p>Could not find this page ...</p>
      </div>
    </React.Fragment>
  );
}

export default ErrorPage;
