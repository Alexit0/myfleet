import { json } from "react-router-dom";

export async function orderDetailsLoader({ params }) {
    const response = await fetch(
      `http://localhost:5000/orders/${params.orderId}`
    );
  
    if (!response.ok) {
      throw json(
        {
          message: "Oops.. Couldn't not fetch this order from database...",
        },
        { status: 500 }
      );
    } else {
      return response;
    }
  }
  