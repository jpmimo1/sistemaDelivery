import arrayMove from "array-move";
import { useReducer } from "react";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newPhoto = { id: Date.now(), ...action.photo };
      const newPhotos = state.slice();
      newPhotos.push(newPhoto);
      return newPhotos;
    }
    case "REMOVE": {
      const newPhotos = state.filter((photo) => photo.id !== action.id);
      return newPhotos;
    }
    case "UPDATE": {
      const newPhotos = state.map((photo) => {
        if (photo.id !== action.photo.id) return photo;
        return { ...photo, ...action.photo };
      });
      return newPhotos;
    }
    case "REORDER": {
      const newPhotos = arrayMove(state, action.from, action.to);
      return newPhotos;
    }
    default:
      return state;
  }
};

class SixthStepDataHandler {
  constructor(data, dispatch) {
    this.data = data;
    this.dispatch = dispatch;
  }
  add = (photo) => {
    this.dispatch({ type: "ADD", photo });
  };
  remove = (id) => {
    this.dispatch({ type: "REMOVE", id });
  };
  update = (photo) => {
    this.dispatch({ type: "UPDATE", photo });
  };
  reorder = (from, to) => {
    this.dispatch({ type: "REORDER", from, to });
  };
}

const useSixthStepData = () => {
  const [sixthStepData, sixthStepDataDispatch] = useReducer(
    reducer,
    initialState
  );
  return new SixthStepDataHandler(sixthStepData, sixthStepDataDispatch);
};

export default useSixthStepData;
