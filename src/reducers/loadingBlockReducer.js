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

export const FULL_INITIAL_STATE = [
  {
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
    unloadingPlace: [
      {
        unloadingPlace: {
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
        },
      },
    ],
  },
];

export const loadingBlockReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GENERAL_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case ACTION_TYPES.FULL_GENERAL_INPUT:
      return [
        {
          ...state,
          [action.payload.name]: action.payload.value,
        },
      ];

    case ACTION_TYPES.ADD_UNLOADING:
      return {
        ...state,
        unloadingPlace: state[0].unloadingPlace.push({
          unloadingPlace: {
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
          },
        }),
      };

    case ACTION_TYPES.REMOVE_UNLOADING:
      const list = [...state[0].unloadingPlace];
      list.splice(+action.payload, 1);
      console.log('action => ', action.payload)

      return {
        ...state,
        unloadingPlace: [...list],
      };

    default:
      return state;
  }
};
