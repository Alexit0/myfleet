import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { CustomLoader } from "./singleComponents/SpinnerTable";
import toast from "react-hot-toast";
import { EditIcon } from "../ui/icons/EditIcon";
import { DeleteIcon } from "../ui/icons/DeleteIcon";
import "knopf.css";
import ExpandedComponent from "./singleComponents/ExpandedComponent";

function OrderTable() {
  const ordersData = useRouteLoaderData("orders");
  const [pending, setPending] = useState(true);
  const [deletingRows, setDeletingRows] = useState([]);
  const navigate = useNavigate();

  // Delete event handler
  const handleDeleteOrder = async (event) => {
    const orderId = event.currentTarget.id;

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
        const response = await deletePromise;
      } catch (error) {
        console.error("Delete Error:", error);
      } finally {
        setDeletingRows((prev) => prev.filter((id) => id !== orderId));
        navigate("/orders"); // Navigate on successful deletion
      }
    }
  };

  // Edit event handler
  const handleEditOrder = (event) => {
    navigate(`${event.currentTarget.id}`);
  };

  useEffect(() => {
    setPending(false);
  }, []);

  const columns = [
    {
      name: "Truck number",
      selector: (row) => row.truckNumber,
      sortable: true,
      style: {
        fontWeight: "bold",
      },
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
      button: "true",
      cell: (row) => (
        <div class="knopf-group buttons pill ">
          <button
            class="knopf standard flat outlined small"
            onClick={handleEditOrder}
            id={row._id}
          >
            <svg class="icon">
              <EditIcon />
            </svg>
          </button>

          <button
            class="knopf standard flat outlined small"
            onClick={handleDeleteOrder}
            id={row._id}
            disabled={deletingRows.includes(row._id)}
          >
            <svg class="icon">
              {deletingRows.includes(row._id) ? "..." : ""}
              {!deletingRows.includes(row._id) && <DeleteIcon />}
            </svg>
            {deletingRows.includes(row._id) && "..."}
          </button>
        </div>
      ),
      style: {
        textAlign: "center", // Center the text in the header
      },
      headStyle: {
        textAlign: "center", // Center the heading text
      },
    },
  ];

  // Invoke groupOrdersByDate function to get the grouped orders
  const groupedOrders = groupOrdersByDate(ordersData);

  // Sort entries by date in descending order
  const sortedTables = Object.entries(groupedOrders).sort(([dateA], [dateB]) =>
    dateB.localeCompare(dateA)
  );

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
          highlightOnHover={true}
          expandOnRowClicked={true}
        />
      </div>
    </div>
  ));

  return <React.Fragment>{tables}</React.Fragment>;
}

// Filter out loading post codes
function outputArray(data) {
  const array = data.map((element) => element.postCode);
  return array.join(" + ");
}

// Filter out unloading city post codes
function outputArray2(data) {
  return data
    .flatMap((element) => element.unloadingPlace.map((e) => e.postCode))
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
        ...element,
        loadingPlace: outputArray(element.order),
        unloadingPlace: outputArray2(element.order),
      });
    }
  });
  return groupedOrders;
}

export default OrderTable;
