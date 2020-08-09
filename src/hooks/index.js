const { useReducer } = require("react");

const dialogReducer = (state, action) => {
  switch (action.type) {
    case "OPEN":
      return true;
    case "CLOSE":
      return false;
    default:
      return state;
  }
};

const useOpenDialog = (initalState = false) => {
  const dialogInitialState = initalState;
  return useReducer(dialogReducer, dialogInitialState);
};

export { useOpenDialog };
