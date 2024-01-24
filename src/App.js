import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import OrdersPage from "./pages/Orders.js";
import NewOrderPage from "./pages/NewOrder.js";
import TrucksPage from "./pages/Trucks";
import TruckDetailsPage from "./pages/TruckDetails";
import NewTruck from "./pages/NewTruck.js";
import EditOrderPage from "./pages/EditOrder.js";
import SuccessPage from "./pages/SuccessPage.js";

import { trucksLoader } from "./utils/loaders/trucksLoader.js";
import { truckDetailsLoader } from "./utils/loaders/truckDetailsLoader.js";
import { ordersLoader } from "./utils/loaders/ordersLoader.js";
import { orderDetailsLoader } from "./utils/loaders/orderDetailsLoader.js";

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
      { index: true, element: <HomePage />, loader: ordersLoader },
      { path: "success", element: <HomePage />, loader: ordersLoader }, // Route for "/success on adding the order"

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
      // {path: 'success', element: <SuccessPage/>},

      {
        id: "orders",
        path: "orders",
        loader: ordersLoader,
        children: [
          {
            index: true,
            element: <OrdersPage />,
            action: deleteOrderAction,
          },
          {
            id: "order-details",
            path: ":orderId",
            element: <EditOrderPage />,
            loader: orderDetailsLoader,
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
