import { json, redirect } from "react-router-dom";

export async function deleteTruckAction({ params, request }) {
  const truckId = params.truckId;

  const method = request.method;

  const response = await fetch("http://localhost:5000/trucks/" + truckId, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete truck." },
      {
        status: 500,
      }
    );
  }
  return redirect("/trucks");
}
