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
    case ACTION_TYPES.DATE_INPUT:
      return {
        ...state,
        date: action.payload,
      };
    case ACTION_TYPES.TIME_FROM_INPUT:
      return {
        ...state,
        timeFrom: action.payload,
      };
    case ACTION_TYPES.TIME_TO_INPUT:
      return {
        ...state,
      };
    case ACTION_TYPES.FIXED_TIME_INPUT:
      return {
        ...state,
        fixedTime: action.payload,
      };
    case ACTION_TYPES.LOADING_ADDRESS_INPUT:
      return {
        ...state,
        loadingAddress: action.payload,
      };
    case ACTION_TYPES.POST_CODE_INPUT:
      return {
        ...state,
        postCode: action.payload,
      };
    case ACTION_TYPES.COUNTRY_INPUT:
      return {
        ...state,
        country: action.payload,
      };
    case ACTION_TYPES.DISTANCE_INPUT:
      return {
        ...state,
        distance: action.payload,
      };
    case ACTION_TYPES.COORDINATES_INPUT:
      return {
        ...state,
        coordinates: action.payload,
      };
    case ACTION_TYPES.CARGO_INPUT:
      return {
        ...state,
        cargoDetails: action.payload,
      };
    case ACTION_TYPES.REF_INPUT:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
