import React from "react";
import OrderTable from "../components/OrderTable";

import classes from "./Orders.module.css";

export default function OrdersPage() {
  return (
    <div>
      <h1>Table of orders</h1>
      <div className={classes.table}>
        <OrderTable />
      </div>
    </div>
  );
}
