import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Link } from "react-router-dom";

import classes from "./Error.module.css";

function SuccessPage() {
  return (
    <React.Fragment>
      {/* <MainNavigation /> */}
      <div className={classes.main}>
        <h1>Order successfully added!</h1>
        <Link to={'/'} className="knopf reversed link">Go to the main page</Link>
      </div>
    </React.Fragment>
  );
}

export default SuccessPage;
