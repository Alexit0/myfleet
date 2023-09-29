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
    case ACTION_TYPES.FULL_GENERAL_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case ACTION_TYPES.ADD_UNLOADING:
      const loadingList = [...state[0].unloadingPlace];
      loadingList.splice(+action.payload + 1, 0, generalState);
      // loadingList.push(generalState)
      console.log("state => ", state);
      console.log("loadingList =>", loadingList);

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
