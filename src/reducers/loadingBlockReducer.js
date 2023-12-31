import { ACTION_TYPES } from "./loadingBlockActionTypes.js";

// Loading or unloading general initial state//

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

export const INITIAL_STATE = [
  {
    ...generalState,
    unloadingPlace: [generalState],
  },
];

export const loadingBlockReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING_INPUT:
      const loadingPlaceInput = { [action.payload.name]: action.payload.value };
      const loadingPlaceList = [...state[0].unloadingPlace];
      loadingPlaceList[action.payload.index] = {
        ...loadingPlaceList[+action.payload.index],
        ...loadingPlaceInput,
      };
      return [
        {
          ...state[0],
          [action.payload.name]: action.payload.value,
        },
      ];

    case ACTION_TYPES.ADD_LOADING:
      return;

    case ACTION_TYPES.REMOVE_LOADING:
      return;

    case ACTION_TYPES.UNLOADING_INPUT:
      const unloadingPlaceInput = {
        [action.payload.name]: action.payload.value,
      };
      const unloadingPlaceList = [...state[0].unloadingPlace];
      unloadingPlaceList[action.payload.index] = {
        ...unloadingPlaceList[+action.payload.index],
        ...unloadingPlaceInput,
      };

      return [
        {
          ...state[0],
          unloadingPlace: unloadingPlaceList,
        },
      ];

    case ACTION_TYPES.ADD_UNLOADING:
      const loadingList = [...state[0].unloadingPlace];
      loadingList.splice(+action.payload + 1, 0, generalState);

      return [
        {
          ...state[0],
          unloadingPlace: loadingList,
        },
      ];

    case ACTION_TYPES.REMOVE_UNLOADING:
      const list = [...state[0].unloadingPlace];
      list.splice(+action.payload, 1);

      return [
        {
          ...state[0],
          unloadingPlace: [...list],
        },
      ];

    default:
      return state;
  }
};
