import React, { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../components/OrderForm";
import { editOrderDetails } from "../store/orderSlice";

export default function EditOrderPage() {
  const orderData = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to edit order details when the component mounts
    dispatch(editOrderDetails(orderData.order));
  }, [dispatch, orderData.order]);

  const data = useSelector((state) => state.order);

  console.log("data ===> ", data);

  return (
    <div>
      <h1>Edit order</h1>
      <OrderForm data={data} truckNumber={orderData.truckNumber} method="put" />
      <p />
      <Link to="/trucks" className="knopf reversed link">Cancel</Link>
    </div>
  );
}
