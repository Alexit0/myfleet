const loadingFormReducer = (state, action) => {
  if (action.type === "ADD_UNLOADING") {
    return [...state, {}];
  }
};
export default loadingFormReducer;
