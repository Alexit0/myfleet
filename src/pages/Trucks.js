import React from "react";
import { Link, useLoaderData, json } from "react-router-dom";

import classes from "./Trucks.module.css";
import { AddIcon } from "../ui/icons/Add";

export default function TrucksPage() {
  const truckData = useLoaderData();
  return (
    <React.Fragment>
      <Link to="new" class="knopf reversed outlined flat">
        Add Truck
      </Link>
      <ul className={classes.list}>
        {truckData.map((truck) => (
          <li key={truck._id}>
            <Link to={truck._id} >{truck.truckNumber}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
