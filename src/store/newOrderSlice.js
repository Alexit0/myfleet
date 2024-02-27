import { createSlice } from "@reduxjs/toolkit";

const orderForm = {
  type: "",
  dateTime: "",
  address: "",
  comments: "",
  coordinates: "",
};

const initialState = [
  {
    ...orderForm,
  },
];

const newOrderSlice = createSlice({
  name: "newOrder",
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.splice(+action.payload.index + 1, 0, ...initialState);
    },

    removeForm: (state, action) => {
      state.splice(action.payload.index, 1);
    },
  },
});

export const { addForm, removeForm } = newOrderSlice.actions;

export default newOrderSlice