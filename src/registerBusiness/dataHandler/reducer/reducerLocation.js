const initialState = {
  location: {
    data: {},
    errors: [],
    warnings: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-LOCATION": {
      return action.location;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
