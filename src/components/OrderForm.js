import React from "react";
import LoadingPlaceBlock from "./LoadingPlaceBlock";
import classes from "./OrderForm.module.css";
import {
  useRouteLoaderData,
  json,
  useNavigate,
  redirect,
  useSubmit,
} from "react-router-dom";

const OrderForm = ({ data }) => {
  const navigate = useNavigate();

  const sumbit = useSubmit();

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

    // return redirect("/");
    navigate('/')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(orderData);
    // sumbit(orderData, {})
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
