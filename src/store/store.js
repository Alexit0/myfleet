import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./orderSlice";
import newOrderSlice from "./newOrderSlice";

export const store = configureStore({
  reducer: {
    order: orderSlice.reducer,
    newOrder: newOrderSlice.reducer,
  },
});
