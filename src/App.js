import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import OrdersPage from "./pages/Orders.js";
import NewOrderPage from "./pages/NewOrder.js";
import TrucksPage from "./pages/Trucks";
import TruckDetailsPage from "./pages/TruckDetails";
import NewTruck from "./pages/NewTruck.js";

import { trucksLoader } from "./utils/actions/loaders/trucksLoader.js";
import { truckDetailsLoader } from "./utils/actions/loaders/truckDetailsLoader.js";
import { ordersLoader } from "./utils/actions/loaders/ordersLoader.js";

import { addTruckAction } from "./utils/actions/addTruckAction.js";
import { deleteTruckAction } from "./utils/actions/deleteTruckAction.js";
import { addOrderAction } from "./utils/actions/addOrderAction.js";
import { deleteOrderAction } from "./utils/actions/deleteOrderAction.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "trucks",
        id: "trucks",
        children: [
          { index: true, element: <TrucksPage />, loader: trucksLoader },
          {
            path: ":truckId",
            id: "truck-details",
            loader: truckDetailsLoader,
            children: [
              {
                index: true,
                element: <TruckDetailsPage />,
                action: deleteTruckAction,
              },
              {
                path: "neworder",
                element: <NewOrderPage />,
                action: addOrderAction,
              },
            ],
          },
          { path: "new", element: <NewTruck />, action: addTruckAction },
        ],
      },

      { path: "neworder", element: <OrderForm /> },
      {
        id: "orders",
        path: "orders",
        loader: ordersLoader,
        element: <OrdersPage />,

        action: deleteOrderAction,
        children: [
          {
            // index: true,
            // element: <OrdersPage />,
            // action: deleteOrderAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
