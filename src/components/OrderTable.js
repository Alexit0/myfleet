import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { CustomLoader } from "./singleComponents/SpinnerTable";
import toast from "react-hot-toast";

export default function OrderTable() {
  const ordersData = useRouteLoaderData("orders");
  const [pending, setPending] = useState(true);
  const [deletingRows, setDeletingRows] = useState([]);
  const navigate = useNavigate();

  // An expandable component.
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 10)}</pre>
  );

  // Delete event handler
  const handleDeleteOrder = async (event) => {
    const orderId = event.target.id;
    if (deletingRows.includes(orderId)) {
      return;
    }
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      setDeletingRows((prev) => [...prev, orderId]);

      const deletePromise = fetch(`http://localhost:5000/orders/${orderId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      toast.promise(deletePromise, {
        loading: "Deleting...",
        success: "Order deleted successfully",
        error: "Error deleting order",
      });

      try {
        await deletePromise;
        navigate("/orders"); // Navigate on successful deletion
      } catch (error) {
        console.error(error);
      } finally {
        setDeletingRows((prev) => prev.filter((id) => id !== orderId));
      }
    }
  };

  // Edit event handler
  const handleEditOrder = (event) => {
    navigate(`${event.target.id}`);
  };

  useEffect(() => {
    setPending(false);
  }, []);

  const columns = [
    {
      name: "Truck number",
      selector: (row) => row.truckNumber,
      sortable: true,
    },
    {
      name: "Loading place",
      selector: (row) => row.loadingPlace,
    },
    {
      name: "Unloading place",
      selector: (row) => row.unloadingPlace,
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

  // Invoke groupOrdersByDate function to get the grouped orders
  const groupedOrders = groupOrdersByDate(ordersData);

  // Sort entries by date in descending order
const sortedTables = Object.entries(groupedOrders)
.sort(([dateA], [dateB]) => dateB.localeCompare(dateA));

const tables = sortedTables.map(([date, orders]) => (
<div key={date}>
  <h2>{date}</h2>
  <div
    style={{ borderRadius: "10px" }} // Add inline styling
  >
    <DataTable
      columns={columns}
      data={orders}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      progressPending={pending}
      progressComponent={<CustomLoader />}
      defaultSortFieldId={1}
    />
  </div>
</div>
));

  return <React.Fragment>{tables}</React.Fragment>;
}

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

function groupOrdersByDate(ordersData) {
  const groupedOrders = {};
  ordersData.forEach((element) => {
    const validOrders = element.order.filter((el) => el);
    if (validOrders.length !== 0) {
      const date = validOrders[0].date;
      if (!groupedOrders[date]) {
        groupedOrders[date] = [];
      }
      groupedOrders[date].push({
        _id: element._id,
        truckNumber: element.truckNumber,
        loadingPlace: outputArray(element.order),
        unloadingPlace: outputArray2(element.order),
      });
    }
  });
  return groupedOrders;
}
