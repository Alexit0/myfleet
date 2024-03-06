import { createSlice } from "@reduxjs/toolkit";

const orderForm = {
  type: "",
  dateTime: "",
  address: {
    value: "",
    image: null,
  },
  comments: {
    value: "",
    image: null,
  },
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
    
      // If the name is 'address' or 'comments', update the nested object
      if (name === 'address' || name === 'comments') {
        state[index][name] = {
          ...state[index][name],
          value: value,
        };
      } else {
        // Otherwise, update the top-level field
        state[index][name] = value;
      }
    },
    loadingImage: (state, action) => {
      const { index, name, image } = action.payload;
      state[index][name].image = image;
    },
    addForm: (state, action) => {
      state.splice(+action.payload.index + 1, 0, { ...orderForm });
    },
    removeForm: (state, action) => {
      state.splice(action.payload.index, 1);
    },
    resetForm: () => {
      return initialState;
    },
  },
});
export const { addForm, removeForm, loadingInput, resetForm, loadingImage } =
  newOrderSlice.actions;

export default newOrderSlice;
