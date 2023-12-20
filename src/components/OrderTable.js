import DataTable from "react-data-table-component";
import {
  useRouteLoaderData,
  useSubmit,
  Form,
  redirect,
  useNavigate,
} from "react-router-dom";

export default function OrderTable() {
  const ordersData = useRouteLoaderData("orders");
  const submit = useSubmit();
  const navigate = useNavigate();

  // An expandable component.
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 10)}</pre>
  );

  const selectedDateOrders = [];
  ordersData.forEach((element) => {
    const valid = element.order.filter((el) => el);
    if (valid.length !== 0) {
      selectedDateOrders.push(element);
    }
  });

  function outputArray(data) {
    const array = data.map((element) => element.address);
    return array.join(" + ");
  }

  function outputArray2(data) {
    const array = data.map((element) =>
      element.unloadingPlace.map((e) => e.address)
    );
    const results = [];
    array.forEach((element) => {
      if (element.join("") != false) {
        results.push(element.join(" + "));
      }
    });
    return results.filter((element) => element !== "").join(" + ");
  }

  const handleDeleteOrder = (event) => {
    console.log("clicked");
    console.log(event.target.id);
    const proceed = window.confirm("Are you sure?");

    if (proceed) {
      submit(
        { orderId: event.target.id },
        {
          method: "delete",
          action: event.target.id,
        }
      );
      return navigate("orders");
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
        <Form>
          <input name="orderId" defaultValue={row._id} hidden />
          <button>Edit</button>
          <button onClick={handleDeleteOrder} id={row._id} type="submit">
            Delete
          </button>
        </Form>
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
