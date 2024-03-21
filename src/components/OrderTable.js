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
        await deletePromise;
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

  // Group orders by date
  const groupedOrders = {};
  ordersData.forEach((order) => {
    const date = order.order[0].dateTime.split(" ")[0]; // Extract date part from dateTime
    if (!groupedOrders[date]) {
      groupedOrders[date] = [];
    }
    groupedOrders[date].push(order);
  });

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
      name: "Trip",
      selector: (row) => row.order.map((item) => item.type).join(" | "),
    },
    {
      name: "Action",
      button: "true",
      cell: (row) => (
        <div className="knopf-group buttons pill ">
          <button
            className="knopf standard flat outlined small"
            onClick={handleEditOrder}
            id={row._id}
          >
            <svg className="icon base">
              <EditIcon />
            </svg>
          </button>

          <button
            className="knopf standard flat outlined small"
            onClick={handleDeleteOrder}
            id={row._id}
            disabled={deletingRows.includes(row._id)}
          >
            <svg className="icon base">
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

  const tables = Object.entries(groupedOrders).map(([date, orders]) => (
    <div key={date}>
      <h2>{date}</h2>
      <div style={{ borderRadius: "10px" }}>
        {/* Render column headers outside the loop */}
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

export default OrderTable;
