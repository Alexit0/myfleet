import React from "react";
// import MainNavigation from "../components/MainNavigation";
import { Link, redirect } from "react-router-dom";

import classes from "./Error.module.css";

function SuccessPage() {
  setTimeout(function () {
    window.location.replace("/");
  }, 1000);
  return (
    <React.Fragment>
      <div className={classes.main}>
        <h1>Success! Redirecting to the main page ...</h1>
        {/* <Link to={"/"} className="knopf reversed link">
          Go to the main page
        </Link> */}
      </div>
    </React.Fragment>
  );
}

export default SuccessPage;
