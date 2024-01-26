import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";

// const theme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
  </Provider>
);
