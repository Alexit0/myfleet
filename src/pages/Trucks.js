import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import classes from "./Trucks.module.css";

function TrucksPage() {
  const truckData = useLoaderData();
  return (
    <React.Fragment>
      <ul className={classes.list}>
        {truckData.map((truck) => (
          <li key={truck.id}>
            <Link to={truck.id}>{truck.number}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default TrucksPage;
