import React from "react";
import LoadingPlaceBlock from "./LoadingPlaceBlock";
import classes from "./OrderForm.module.css";
import { json, useNavigate, useParams } from "react-router-dom";
import { resetForm } from "../store/orderSlice";
import { useDispatch } from "react-redux";

const OrderForm = ({ data, truckNumber, method }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const orderData = {
    truckNumber: truckNumber,
    order: [...data],
  };

  async function addOrderAction(data) {
    let url = `http://localhost:5000/orders`;
    if (method === "put") {
      url = `http://localhost:5000/orders/${params.orderId}`;
    }
    const response = await fetch(url, {
      method,
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

    navigate("/trucks");
    dispatch(resetForm());
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addOrderAction(orderData);
  };

  return (
    <form onSubmit={handleSubmit} method={method}>
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
