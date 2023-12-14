import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import TrucksPage, { loader as trucksLoader } from "./pages/Trucks";
import TruckDetailsPage, {
  loader as truckDetailsLoader,
} from "./pages/TruckDetails";
import { NewTruck } from "./pages/NewTruck.js";
import { addTruckAction } from "./utils/actions/addTruckAction.js";
import { deleteTruckAction } from "./utils/actions/deleteTruckAction.js";
import { addOrderAction } from "./utils/actions/addOrderAction.js";
import { NewOrderPage } from "./pages/NewOrder.js";

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
          { path: "new", 
          element: <NewTruck />, 
          action: addTruckAction, 
        },
        ],
      },

      { path: "neworder", element: <OrderForm /> },
    ],
  },
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
