import { createSlice } from "@reduxjs/toolkit";

const generalState = {
  date: "",
  timeFrom: "",
  timeTo: "",
  // fixedTime: false,
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
    },
    addLoading: (state, action) => {
      state.splice(+action.payload + 1, 0, ...initialState);
    },
    removeLoading: (state, action) => {
      state.splice(action.payload, 1);
    },

    unloadingInput: (state, action) => {
      const unloadingData = { [action.payload.name]: action.payload.value };
      state[action.payload.parentIndex].unloadingPlace[action.payload.index] = {
        ...state[action.payload.parentIndex].unloadingPlace[
          action.payload.index
        ],
        ...unloadingData,
      };
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
  unloadingInput,
  addUnloading,
  removeUnloading,
} = orderSlice.actions;

export default orderSlice;
