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
      return [
        {
          ...state[0],
          [action.payload.name]: action.payload.value,
        },
      ];

    case ACTION_TYPES.UNLOADING_INPUT:
      const input = { [action.payload.name]: action.payload.value };
      const unloadingList = [...state[0].unloadingPlace];
      unloadingList[action.payload.index] = {
        ...unloadingList[+action.payload.index],
        ...input,
      };

      return [
        {
          ...state[0],
          unloadingPlace: unloadingList,
        },
      ];

    case ACTION_TYPES.ADD_UNLOADING:
      const loadingList = [...state[0].unloadingPlace];
      // supposed to add fields in between existing unloadings but doesnt work ...
      // loadingList.splice(+action.payload + 1, 0, generalState);
      loadingList.push(generalState);

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
