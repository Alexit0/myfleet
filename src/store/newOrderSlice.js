import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';


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
    loadingInput: (state, action) => {
      const loadingData = { [action.payload.name]: action.payload.value };
      state[action.payload.index] = {
        ...state[action.payload.index],
        ...loadingData,
      };
    },
    addForm: (state, action) => {
      state.splice(+action.payload.index + 1, 0, ...initialState);
    },

    removeForm: (state, action) => {
      state.splice(action.payload.index, 1);
    },

    resetForm: () => {
      return initialState;
    },
  },
});

export const { addForm, removeForm, loadingInput, resetForm } =
  newOrderSlice.actions;

export default newOrderSlice;
