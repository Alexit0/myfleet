// NewOrderPage.js
import React, { useEffect } from "react";
import OrderForm from "../components/OrderForm";
import {
  useRouteLoaderData,
  Link,
  useNavigate,
  useBlocker,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetForm } from "../store/orderSlice";
import { LeavePageModal } from "../ui/icons/Modal";
import { useFormTouched } from "../utils/hooks/useFormTouched";
export default function NewOrderPage() {
  const data = useSelector((state) => state.order);
  const truckNumber = useRouteLoaderData("truck-details").truckNumber;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formTouched } = useFormTouched();

  // Reseting the form on initial render
  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  let blocker;

  const handleCancel = () => {
    blocker.reset();
  };

  const handleConfirm = () => {
    navigate("/trucks");
    dispatch(resetForm());
    blocker.proceed();
  };

  blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      formTouched && currentLocation.pathname !== nextLocation.pathname
  );

  const isPageBlocked = formTouched && blocker.state === "blocked";

  return (
    <div>
      <h3>Truck details:</h3>
      <h1>{truckNumber}</h1>
      <p />
      <OrderForm data={data} truckNumber={truckNumber} method="post" />
      <p />
      <Link to="/trucks" className="knopf reversed link">
        Cancel and go back to the list
      </Link>
      <p />
      {isPageBlocked && (
        <LeavePageModal onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </div>
  );
}
