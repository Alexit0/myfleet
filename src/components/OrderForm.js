import React from "react";
import LoadingPlaceBlock from "./LoadingPlaceBlock";
// import classes from "./OrderForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { resetForm } from "../store/orderSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const OrderForm = ({ data, truckNumber, method, onChange }) => {
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

    const savePromise = fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    toast.promise(savePromise, {
      loading: "Saving...",
      success: "Order saved successfully!",
      error: "An error occurred while saving the order.",
    });

    try {
      const response = await savePromise;

      if (response.status === 422) {
        // Handle validation error
        return response;
      }

      if (!response.ok) {
        throw new Error("Could not save order...");
      }

      // Navigate and reset form on successful save
      dispatch(resetForm());
      navigate("/success");
    } catch (error) {
      // Log the error to the console
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addOrderAction(orderData);
  };

  return (
    <form onSubmit={handleSubmit} method={method}>
      <main>
        {data.map((loadingPlace, index) => (
          <LoadingPlaceBlock
            key={index}
            index={index}
            value={loadingPlace}
            onChange={onChange}
          />
        ))}

        <button type="submit" className="knopf submit">Submit</button>
      </main>
    </form>
  );
};

export default OrderForm;
