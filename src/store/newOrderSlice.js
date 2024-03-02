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
    loadingInput: (state, action) => {
      const { name, value, index } = action.payload;
      state[index] = {
        ...state[index],
        [name]: value,
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
