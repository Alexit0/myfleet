import React, { useEffect } from "react";
import LoadingPlaceBlock from "./LoadingPlaceBlock";
import classes from "./OrderForm.module.css";
import { useRouteLoaderData, json, useNavigate } from "react-router-dom";
import { resetForm } from "../store/orderSlice";
import { useDispatch } from "react-redux";

const OrderForm = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const truckData = useRouteLoaderData("truck-details");
  const orderData = {
    truckNumber: truckData.truckNumber,
    order: [...data],
  };

  async function addOrderAction(data) {
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save order ..." });
    }

    navigate("/");
    dispatch(resetForm());  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(orderData);
    addOrderAction(orderData);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <main>
        {data.map((loadingPlace, index) => (
          <LoadingPlaceBlock key={index} index={index} value={loadingPlace} />
        ))}

        <button type="submit" className={classes["submit-button"]}>
          Submit
        </button>
      </main>
    </form>
  );
};

export default OrderForm;
