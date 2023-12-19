import React from "react";
import OrderForm from "../components/OrderForm";
import { useRouteLoaderData, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NewOrderPage() {
  const data = useSelector((state) => state.order);
  const truckNumber = useRouteLoaderData("truck-details").truckNumber;

  return (
    <div>
      <h3>Truck details:</h3>
      <h1>{truckNumber}</h1>
      <p />
      <OrderForm data={data} />
      <p />
      <Link to="/trucks">back to the list</Link>
      <p />
    </div>
  );
}
