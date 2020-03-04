export const initialState = {
  features: []
};

export const removeReducer = (state = initialState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "REMOVE_FEATURE":
      const oldFeature = { feature: action.payload };
      return {
        ...state,
        features: [...state.features, action.payload]
      };

    default:
      return state;
  }
};
