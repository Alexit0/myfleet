// NewOrderPage.js
import React, { useEffect } from "react";
// IMPORT OLD ORDER FORM
import OrderForm from "../components/OrderForm";
// IMPORT NEW ORDER FORM
import OrderFormV2 from "./OrderFormV2";
import {
  useRouteLoaderData,
  Link,
  useNavigate,
  useNavigation,
  useBlocker,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resetForm } from "../store/orderSlice";
import { LeavePageModal } from "../ui/icons/Modal";
import { useFormTouched } from "../utils/hooks/useFormTouched";

export default function NewOrderPage() {
  // OLD FORM STATE
  const oldData = useSelector((state) => state.order);
  // NEW FORM STATE
  const data = useSelector((state) => state.newOrder);
  // console.log("data => ", data)
  // console.log("oldData => ", oldData)

  const truckNumber = useRouteLoaderData("truck-details").truckNumber;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formTouched } = useFormTouched();
  const navigaion = useNavigation();
  const isSubmitting =
    navigaion.state === "submitting" || navigaion.state === "loading";

  // Reseting the form on initial render
  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  let blocker;

  const handleCancel = () => {
    blocker.reset();
  };

  const handleConfirm = () => {
    dispatch(resetForm());
    blocker.proceed();
    navigate("/trucks");
  };

  blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      formTouched &&
      currentLocation.pathname !== nextLocation.pathname &&
      nextLocation.pathname !== "/success"
  );
  const isPageBlocked =
    !isSubmitting && formTouched && blocker.state === "blocked";

  return (
    <div>
      <h3>Truck details:</h3>
      <h1>{truckNumber}</h1>
      <p />
      {/* <OrderForm data={oldData} truckNumber={truckNumber} method="post" /> */}
      <OrderFormV2 data={data} truckNumber={truckNumber} method="post" />
      <p />
      <Link to="/trucks" className="knopf standard link">
        Cancel and go back to the list
      </Link>
      <p />
      {isPageBlocked && (
        <LeavePageModal onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </div>
  );
}
