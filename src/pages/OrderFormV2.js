import React from "react";
import UniversalForm from "../components/UniversalForm";
import {
  addForm,
  removeForm,
  loadingInput,
  loadingImage,
  resetForm,
} from "../store/newOrderSlice";
import { useDispatch } from "react-redux";
import DisplayConvertedDateTime from "../components/singleComponents/DisplayConvertedDateTime";
import parseDateTimeString from "../utils/parseDateTimeString";

import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const OrderFormV2 = ({ data, truckNumber, method }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const censoredState = data.map((order, index) => ({
    ...order,
    index,
    address: order.address.value,
    comments: order.comments.value,
  }));

  const orderData = {
    truckNumber,
    order: [...censoredState],
  };

  console.log("OrderFormV2.orderData =>", orderData);
  console.log("OrderFOrmV2.data =>", data);
  console.log("OrderFormV2.truckNumber ==>", truckNumber);
  console.log("OrderFormV2.censoredState ==>", censoredState);

  const handleImageChange = ({ index, name, image }) => {
    dispatch(loadingImage({ index, name, image }));
  };

  const loadingInputHandle = ({ name, value, index }) => {
    dispatch(loadingInput({ name, value, index }));
  };

  const handleAddForm = (index) => {
    dispatch(addForm({ index }));
  };

  const handleRemoveForm = (index) => {
    dispatch(removeForm({ index }));
  };

  const handleInputChange = ({ name, value, index }) => {
    dispatch(loadingInput({ name, value, index }));
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
      <div style={{ display: "flex" }}>
        {data.map((singleForm, index) => (
          <div key={index}>
            <UniversalForm
              index={index}
              handleInput={loadingInputHandle}
              handleInputChange={handleInputChange} // Pass down the new handler
              value={singleForm}
              handleImage={handleImageChange}
            />
            <button
              onClick={() => handleAddForm(index)}
              className="knopf small pill standard"
            >
              Add
            </button>
            {data.length > 1 && (
              <button
                onClick={() => handleRemoveForm(index)}
                className="knopf small pill standard"
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <button type="submit" className="knopf submit">
        Submit
      </button>

      <p>Order info:</p>
      {data.map((singleForm, index) => (
        <div key={index}>
          <DisplayConvertedDateTime
            formattedDateTime={parseDateTimeString(singleForm.dateTime)}
            type={singleForm.type}
            address={singleForm.address.value}
            comments={singleForm.comments.value}
            coordinates={singleForm.coordinates}
          />
        </div>
      ))}
    </form>
  );
};

export default OrderFormV2;
