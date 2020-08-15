const initialState = {
  categories: {
    data: [],
    errors: [],
    warnings: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-CATEGORIES": {
      return action.categories;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
