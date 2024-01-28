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
        <input
          name="truckNumber"
          className={classes.input}
          type="text"
          maxLength="10"
          required
        ></input>
        <p />
        <button className="knopf pale large standard">Save</button>
      </div>
      <br />
      <Link to="/trucks" className="knopf link standard">
        Back
      </Link>
    </Form>
  );
}
