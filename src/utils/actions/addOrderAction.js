import { json, redirect } from "react-router-dom";
import { UseSelector } from "react-redux";

export async function addOrderAction({ request, params }) {

  const data = await request.formData();
  console.log("addOrderAction engaged")
  

  let url = `http://localhost:5000/orders`;

  const response = await fetch(url, {
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

  return redirect("/trucks");
}
