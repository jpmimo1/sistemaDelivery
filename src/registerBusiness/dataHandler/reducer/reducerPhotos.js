const initialState = {
  photos: {
    data: [],
    errors: [],
    warnings: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-PHOTOS": {
      return action.photos;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
