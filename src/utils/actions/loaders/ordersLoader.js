import { json } from "react-router-dom";

export async function ordersLoader() {
  const response = await fetch("http://localhost:5000/orders");

  if (!response.ok) {
    throw json(
      {
        message: "Sorry.. Couldn't not fetch orders from database.",
      },
      { status: 500 }
    );
  } else {
    return response;
  }
}
