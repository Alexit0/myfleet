import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { CustomLoader } from "./singleComponents/SpinnerTable";

export default function OrderTable() {
  const ordersData = useRouteLoaderData("orders");
  // Loading spinner
  const [pending, setPending] = useState(true);
  const [rows, setRows] = useState([]);
  // Responsive delete button
  const [deletingRows, setDeletingRows] = useState([]);
  const navigate = useNavigate();

  // An expandable component.
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 10)}</pre>
  );

  // Filter orders by days (not finished)
  const selectedDateOrders = [];

  ordersData.forEach((element) => {
    // const valid = element.order.filter((el) => el.date == "2023-12-19");
    //Temporary solution
    const valid = element.order.filter((el) => el);
    if (valid.length !== 0) {
      selectedDateOrders.push(element);
    }
  });

  // Filter out loading cities
  function outputArray(data) {
    const array = data.map((element) => element.address);
    return array.join(" + ");
  }

  // Filter out unloading cities
  function outputArray2(data) {
    return data
      .flatMap((element) => element.unloadingPlace.map((e) => e.address))
      .filter((element) => element !== "")
      .join(" + ");
  }

  const handleDeleteOrder = async (event) => {
    const orderId = event.target.id;
    // Check if the row is already in the process of being deleted
    if (deletingRows.includes(orderId)) {
      return;
    }
    const proceed = window.confirm("Are you sure?");

    // Wont refresh order page after deleting the element on deleteOrderAction
    //
    //
    // const formData = new FormData();
    // formData.set("orderId", event.target.id);
    //
    // if (proceed) {
    //   submit(formData, {
    //     method: "DELETE",
    //   });
    //
    //   return navigate("");
    // }

    if (proceed) {
      setDeletingRows((prev) => [...prev, orderId]);

      try {
        const response = await fetch(
          `http://localhost:5000/orders/${orderId}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Could not delete order.");
        }

        // After successful deletion, remove the row from the state
        setRows((prevRows) => prevRows.filter((row) => row._id !== orderId));
      } catch (error) {
        // Handle the error if the deletion fails
        console.error(error);
      } finally {
        // Remove the row from the deletingRows state
        setDeletingRows((prev) => prev.filter((id) => id !== orderId));
      }
      return navigate("/orders");
    }
  };

  const handleEditOrder = (event) => {
    navigate(`${event.target.id}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(selectedDateOrders);
      setPending(false);
    }, 300);
    return () => clearTimeout(timeout);
  });

  const columns = [
    {
      name: "Truck number",
      selector: (row) => row.truckNumber,
      sortable: true,
    },
    {
      name: "Loading place",
      selector: (row) => outputArray(row.order),
    },
    {
      name: "Unloading place",
      selector: (row) => outputArray2(row.order),
    },
    {
      name: "Action",
      button: true,
      cell: (row) => (
        <>
          <button onClick={handleEditOrder} id={row._id}>
            Edit
          </button>

          <button
            onClick={handleDeleteOrder}
            id={row._id}
            disabled={deletingRows.includes(row._id)}
          >
            {deletingRows.includes(row._id) ? "..." : "Delete"}
          </button>
        </>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={rows}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      progressPending={pending}
      progressComponent={<CustomLoader />}
      defaultSortFieldId={1}
    />
  );
}
