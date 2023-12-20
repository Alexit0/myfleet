import React from "react";

import {
  Link,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";

import classes from "./TruckDetails.module.css";

export default function TruckDetailsPage() {
  const truckData = useRouteLoaderData("truck-details");
  const submit = useSubmit();

  function handleDelete() {
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }

  return (
    <div className={classes.div}>
      <h3>Truck details:</h3>
      <h1>{truckData.truckNumber}</h1>
      <p />
      <Link to="neworder">Add new order</Link>
      <p />
      <Link to="/trucks">back to the list</Link>
      <p />

      <button type="submit" onClick={handleDelete}>
        Delete truck
      </button>
    </div>
  );
}
