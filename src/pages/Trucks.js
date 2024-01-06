import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import classes from "./Trucks.module.css";
import iClasses from "../ui/icons/Icons.module.css";

import { IoMdAddCircleOutline } from "react-icons/io";

export default function TrucksPage() {
  const truckData = useLoaderData();
  return (
    <React.Fragment>
      <Link to="new" className="knopf reversed outlined flat end">
        <svg className="icon large">
          <IoMdAddCircleOutline className={iClasses.add} />
        </svg>
        Add Truck
      </Link>
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
