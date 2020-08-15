import {
  initialState as initialStateInitialData,
  reducer as reducerInitialData
} from "./reducerInitialData";

import {
  initialState as initialStateLocation,
  reducer as reducerLocation
} from "./reducerLocation";

import {
  initialState as initialStateCategories,
  reducer as reducerCategories
} from "./reducerCategories";

const initialState = {
  ...initialStateInitialData,
  ...initialStateLocation,
  ...initialStateCategories
};

const objectReducers = {
  initialData: reducerInitialData,
  location: reducerLocation,
  categories: reducerCategories
};

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
