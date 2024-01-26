import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <Toaster
      position="top-left"
      reverseOrder={false}
      toastOptions={{
        success: {
          iconTheme: {
            primary: "antiquewhite",
            secondary: "#151d2c",
          },
        },
      }}
    />
  </Provider>
);
