import React from "react";

import {
  Link,
  useLoaderData,
  useRouteLoaderData,
  useParams,
  useSubmit,
  json,
} from "react-router-dom";

import classes from "./TruckDetails.module.css";

export default function TruckDetailsPage() {
  const truckData = useRouteLoaderData("truck-details");
  const params = useParams();
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

export async function loader({ params }) {
  const response = await fetch(
    `http://localhost:5000/trucks/${params.truckId}`
  );

  if (!response.ok) {
    throw json(
      {
        message: "Oops.. Couldn't not fetch this truck from database...",
      },
      { status: 500 }
    );
  } else {
    return response;
  }
}
