import { json, redirect } from "react-router-dom";

export async function addTruckAction({ request, params }) {
  const data = await request.formData();

  const enteredData = { truckNumber: data.get("truckNumber").trim() };
  console.log(enteredData);
  console.log("addTruckAction engaged")

  let url = "http://localhost:5000/trucks/";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(enteredData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save truck" });
  }

  return redirect("/trucks");
}
