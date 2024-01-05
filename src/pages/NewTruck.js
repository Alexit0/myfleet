import React from "react";

import classes from "./NewTruck.module.css";
import { Form, Link } from "react-router-dom";

import "knopf.css";

export default function NewTruck() {
  return (
    <Form method="post" className={classes.form}>
      <h1>Enter truck details</h1>
      <br />
      <div>
        <label>Truck registration plate</label>
        <p />
        <input name="truckNumber"></input>
        <p />
        <button class="knopf reversed flat outlined">Save</button>
      </div>
      <br />
      <Link to="/trucks">Back</Link>
    </Form>
  );
}
