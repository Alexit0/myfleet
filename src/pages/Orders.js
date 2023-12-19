import React from "react";
import OrderTable from "../components/OrderTable";
import { useLoaderData } from "react-router-dom";

import classes from "./Orders.module.css";

export default function OrdersPage() {
  const ordersData = useLoaderData();

  const result = [];
  ordersData.forEach((element) => {
    const valid = element.order.filter((el) => el.date == "2023-12-19");
    if (valid.length !== 0) {
      result.push(element);
    }
  });

  return (
    <div>
      <h1>Table of orders</h1>
      <div className={classes.table}>
        <OrderTable />
      </div>
    </div>
  );
}
