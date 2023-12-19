import DataTable from "react-data-table-component";
import { useRouteLoaderData } from "react-router-dom";

export default function OrderTable() {
  const ordersData = useRouteLoaderData("orders");

  // An expandable component.
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 10)}</pre>
  );

  const selectedDateOrders = [];
  ordersData.forEach((element) => {
    const valid = element.order.filter((el) => el.date == "2023-12-19");
    if (valid.length !== 0) {
      selectedDateOrders.push(element);
    }
  });

  function outputArray(data) {
    const array = data.map((el) => el.address);
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
