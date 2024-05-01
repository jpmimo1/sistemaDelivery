import { useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newState = state.slice();
      newState.push(action.element);
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(({ id }) => id !== action.id);
      return newState;
    }
    default:
      return state;
  }
};

class FourthStepDataHandler {
  constructor(data, dispatch) {
    this.data = data;
    this.dispatch = dispatch;
  }

  addElement = (element) => {
    this.dispatch({ type: "ADD", element });
  };
  deleteElement = (id) => {
    this.dispatch({ type: "DELETE", id });
  };
}

const useFourthStepData = () => {
  const [fourthStepData, fourthStepDataDispatch] = useReducer(
    reducer,
    initialState
  );

  return new FourthStepDataHandler(fourthStepData, fourthStepDataDispatch);
};

export default useFourthStepData;
