const initialState = {
  initialData: {
    data: { name: "", description: "", phone: "" },
    errors: [],
    warnings: []
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET-INITIAL-DATA": {
      return action.initialData;
    }
    default:
      return state;
  }
};

export { initialState, reducer };
