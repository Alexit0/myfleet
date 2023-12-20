import { json, redirect, useNavigate } from "react-router-dom";

export async function deleteOrderAction({ request }) {
  const formData = await request.formData();
  const orderId = formData.get("orderId");
  const method = request.method;
//   const navigate = useNavigate();

  const response = await fetch("http://localhost:5000/orders/" + orderId, {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log("deleteOrderAction response");

  if (!response.ok) {
    throw json(
      { message: "Could not delete order." },
      {
        status: 500,
      }
    );
  }
  return redirect("/");
}
