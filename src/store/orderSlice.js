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
    loadingInput: (state, action) => {
      const loadingData = { [action.payload.name]: action.payload.value };
      state[action.payload.index] = {
        ...state[action.payload.index],
        ...loadingData,
      };
      console.log(loadingData);
    },
    addLoading: (state, action) => {
      state.splice(+action.payload + 1, 0, ...initialState);
      console.log("action.payload => ", action.payload);
    },
    removeLoading: (state, action) => {
      state.splice(action.payload, 1);
      console.log("action.payload => ", action.payload);
    },

    addUnloading: (state, action) => {
      state[action.payload.parentIndex].unloadingPlace.splice(
        action.payload.index + 1,
        0,
        generalState
      );
    },

    removeUnloading: (state, action) => {
      state[action.payload.parentIndex].unloadingPlace.splice(
        action.payload.index,
        1
      );
    },
  },
});

export const {
  loadingInput,
  addLoading,
  removeLoading,
  addUnloading,
  removeUnloading,
} = orderSlice.actions;

export default orderSlice;
