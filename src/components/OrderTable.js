import DataTable from "react-data-table-component";
import { useRouteLoaderData, useNavigate, json } from "react-router-dom";

export default function OrderTable() {
  const ordersData = useRouteLoaderData("orders");
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
    const array = data.map((element) =>
      element.unloadingPlace.map((e) => e.address)
    );
    const results = [];
    array.forEach((element) => {
      if (element.join("") !== false) {
        results.push(element.join(" + "));
      }
    });
    return results.filter((element) => element !== "").join(" + ");
  }

  // Using function instead of action as row._id is not passed correctly to deleteOrderAction resulting in removing wrong rows of data in the table.
  const handleDeleteOrder = async (event) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const response = await fetch(
        "http://localhost:5000/orders/" + event.target.id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw json(
          { message: "Could not delete order." },
          {
            status: 500,
          }
        );
      }
      return navigate("/orders");
    }
  };

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
          {/* <input name="orderId" defaultValue={row._id} hidden /> */}
          <button>Edit</button>
          <button onClick={handleDeleteOrder} id={row._id} type="submit">
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={selectedDateOrders}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      defaultSortFieldId={1}
    />
  );
}
