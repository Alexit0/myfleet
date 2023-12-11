import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import classes from "./App.module.css";
import TrucksPage from "./pages/Trucks";
import TruckDetailsPage from "./pages/TruckDetails";
import { DUMMY_TRUCKS } from "./components/helpers/dummyData.js";

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
        element: <TrucksPage />,
        loader: () => {
          return DUMMY_TRUCKS;
        },
      },
      {
        path: "trucks/:truckId",
        element: <TruckDetailsPage />,
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
