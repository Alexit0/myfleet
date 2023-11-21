import { createSlice } from "@reduxjs/toolkit";

const generalState = {
  date: "",
  timeFrom: "",
  timeTo: "",
  fixedTime: false,
  address: "",
  postCode: "",
  country: "",
  distance: "",
  coordinates: "",
  cargoDetails: "",
  comments: "",
};

const initialState = [
  {
    ...generalState,
    unloadingPlace: [generalState],
  },
];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    loadingInput: (state) => {
      state.value += 1;
    },
    addLoading: (state, action) => {
      state.splice(+action.payload + 1, 0, ...initialState);
      console.log("action.payload => ", action.payload);
    },
    removeLoading: (state, action) => {
      state.splice(action.payload, 1);
      console.log("action.payload => ", action.payload);
    },
  },
});

export const { loadingInput, addLoading, removeLoading } = orderSlice.actions;

export default orderSlice;
