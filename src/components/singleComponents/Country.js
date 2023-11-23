import React from "react";

import { useDispatch } from "react-redux";
import { loadingInput } from "../../store/orderSlice";

import classes from "../OrderForm.module.css";

const Country = ({ index, value }) => {
  const dispatch = useDispatch();
  const handleCountry = (event) => {
    dispatch(
      loadingInput({
        name: event.target.name,
        value: event.target.value,
        index,
      })
    );
  };
  return (
    <span className={classes.country}>
      <select
        name="country"
        onChange={(event) => handleCountry(event)}
        value={value}
      >
        <option value="none" hidden>
          Select Country
        </option>
        <option>Germany</option>
        <option>Netherlands</option>
        <option>Belgium</option>
        <option>Luxembourg</option>
        <option>France</option>
        <option>Italy</option>
        <option>Poland</option>
        <option>Switzerland</option>
        <option>Czech Republic</option>
        <option>Lithuania</option>
      </select>
    </span>
  );
};

export default Country;
