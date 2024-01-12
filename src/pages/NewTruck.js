import React from "react";

import classes from "./NewTruck.module.css";
import { Form, Link, useActionData } from "react-router-dom";

import "knopf.css";

export default function NewTruck() {
  const errors = useActionData();

  return (
    <Form method="post" className={classes.form}>
      <h1>Enter truck details</h1>
      <br />
      <div>
        <label>Truck registration plate</label>
        <p />
        {errors?.message && (
          <ul>
            {Object.values(
              errors.message.map((err) => <li key={err}>{err}</li>)
            )}
          </ul>
        )}
        <input name="truckNumber"></input>
        <p />
        <button className="knopf reversed flat outlined">Save</button>
      </div>
      <br />
      <Link to="/trucks" className="knopf link reversed">
        Back
      </Link>
    </Form>
  );
}
