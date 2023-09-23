import { ACTION_TYPES } from "./loadingBlockActionTypes.js";

export const INITIAL_STATE = {
  date: "",
  timeFrom: "",
  timeTo: "",
  fixedTime: false,
  loadingAddress: "",
  postCode: "",
  country: "",
  distance: "",
  coordinates: "",
  cargoDetails: "",
  comments: "",
};

export const loadingBlockReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GENERAL_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
