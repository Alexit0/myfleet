import React from "react";
import OrderForm from "../components/OrderForm";
import { useRouteLoaderData, Link, useBlocker } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetForm } from "../store/orderSlice";

import { LeavePageModal } from "../ui/icons/Modal";

export default function NewOrderPage() {
  const data = useSelector((state) => state.order);
  const truckNumber = useRouteLoaderData("truck-details").truckNumber;
  const dispatch = useDispatch();

  const [formTouched, setFormTouched] = React.useState(false);

  const handleFormChange = () => {
    if (!formTouched) {
      setFormTouched(true);
    }
  };

  // const hasDataEntered = () => {
  //   return Object.values(data).some((value) => value !== "");
  // };
  // console.log("hasDataEntered => ", hasDataEntered());
  // console.log("data", data)

  const handleCancel = () => {
    blocker.reset();
  };
  const handleConfirm = () => {
    blocker.proceed();
    dispatch(resetForm());
  };

  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname
  );

  return (
    <div>
      <h3>Truck details:</h3>
      <h1>{truckNumber}</h1>
      <p />
      {blocker.state === "blocked" && !formTouched ? (
        <LeavePageModal onCancel={handleCancel} onConfirm={handleConfirm} />
      ) : null}
      <OrderForm
        data={data}
        truckNumber={truckNumber}
        method="post"
        onChange={handleFormChange}
      />
      <p />
      <Link to="/trucks" className="knopf reversed link">
        Cancel and go back to the list
      </Link>
      <p />
    </div>
  );
}
