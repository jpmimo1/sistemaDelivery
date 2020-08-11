import {
  initialState as initialStateInitialData,
  reducer as reducerInitialData
} from "./reducerInitialData";

const initialState = { ...initialStateInitialData };

const objectReducers = { initialData: reducerInitialData };

/*Juntamos todos los reducer recorriendo el arreglo y concatenado con las key respectivas */
const reducer = (state, action) => {
  const arrayKeys = Object.keys(initialState);

  return arrayKeys.reduce(
    (previous, current) => ({
      ...previous,
      [current]: objectReducers[current](previous[current], action)
    }),
    state
  );
};

export { reducer, initialState };
