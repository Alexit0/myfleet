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

const UniversalForm = {
  type: "",
  dateTime: "",
  address: "",
  comments: "",
  coordinates: "0",
};

const UniversalFormState = [
  {
    ...UniversalForm,
  },
];

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

    resetForm: () => {
      return initialState;
    },

    editOrderDetails: (state, action) => {
      console.log("action IN SLICE", action.payload);
      return [...action.payload];
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
  resetForm,
  editOrderDetails,
  addUniversalForm,
  removeUniversalForm,
} = orderSlice.actions;

export default orderSlice;
