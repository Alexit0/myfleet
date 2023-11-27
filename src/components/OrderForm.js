import React from "react";

import { useSelector } from "react-redux";

import LoadingPlaceBlock from "./LoadingPlaceBlock";

import classes from "./OrderForm.module.css";

const OrderForm = () => {
  const orderData = useSelector((state) => state.order);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <main>
          {orderData.map((loadingPlace, index) => (
            <LoadingPlaceBlock key={index} index={index} value={loadingPlace} />
          ))}

        <button className={classes["submit-button"]}>Submit</button>
      </main>
    </form>
  );
};

export default OrderForm;
