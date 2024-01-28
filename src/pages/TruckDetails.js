import React from "react";

import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";

import classes from "./TruckDetails.module.css";
import { DeleteIcon } from "../ui/icons/DeleteIcon";
import { TiDocumentAdd } from "react-icons/ti";

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
      <Link to="neworder" className="knopf pale large m-8 standard">
        <TiDocumentAdd className="icon large" />
        Add new order
      </Link>
      <p />

      <button type="submit" onClick={handleDelete} className="knopf pale medium standard">
        <svg className="icon">
          <DeleteIcon />
        </svg>
        Delete truck
      </button>
      <p />
      <Link to="/trucks" className="knopf standard link">
        back to the list
      </Link>
    </div>
  );
}
