import React from "react";
import { Link, useLoaderData, json } from "react-router-dom";

import classes from "./Trucks.module.css";

export default function TrucksPage() {
  const truckData = useLoaderData();
  return (
    <React.Fragment>
      <Link to='new'>Add Truck</Link>
      <ul className={classes.list}>
        {truckData.map((truck) => (
          <li key={truck._id}>
            <Link to={truck._id}>{truck.truckNumber}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:5000/trucks");

  if (!response.ok) {
    throw json(
      {
        message: "Sorry.. Couldn't not fetch trucks from database.",
      },
      { status: 500 }
    );
  } else {
    return response;
  }
}
