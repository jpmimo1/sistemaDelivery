const initialState = {
  menu: {
    data: {
      dishes: [],
      categories: []
    },
    errors: [],
    warnings: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-MENU": {
      return action.menu;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
