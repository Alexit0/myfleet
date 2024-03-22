// EditOrderPage.js
import React, { useEffect } from "react";
import { useLoaderData, Link, useNavigate, useBlocker } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderFormV2 from "./OrderFormV2";
import { editOrderDetails } from "../store/newOrderSlice";
import { useFormTouched } from "../utils/hooks/useFormTouched";
import { resetForm } from "../store/orderSlice";
import { LeavePageModal } from "../ui/icons/Modal";

export default function EditOrderPage() {
  const orderData = useLoaderData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formTouched } = useFormTouched();

  useEffect(() => {
    // Dispatch the action to edit order details when the component mounts
    const updatedOrders = orderData.order.map(({ index, ...order }) => ({
      ...order,
      address: { value: order.address },
      comments: { value: order.comments },
    }));
    dispatch(editOrderDetails(updatedOrders));
  }, [dispatch, orderData.order]);

  const data = useSelector((state) => state.newOrder);

  let blocker;

  const handleCancel = () => {
    blocker.reset();
  };

  const handleConfirm = () => {
    navigate("/orders");
    dispatch(resetForm());
    blocker.proceed();
  };

  blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      formTouched &&
      currentLocation.pathname !== nextLocation.pathname &&
      nextLocation.pathname !== "/success"
  );
  const isPageBlocked = formTouched && blocker.state === "blocked";

  return (
    <div>
      <h1>Edit order</h1>
      <OrderFormV2
        data={data}
        truckNumber={orderData.truckNumber}
        method="put"
      />

      <p />
      <Link to="/orders" className="knopf standard link">
        Cancel
      </Link>
      <p />
      {isPageBlocked && (
        <LeavePageModal onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </div>
  );
}
