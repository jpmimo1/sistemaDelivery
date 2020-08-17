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

import {
  initialState as initialStateMenu,
  reducer as reducerMenu
} from "./reducerMenu";

import {
  initialState as initialStatePhotos,
  reducer as reducerPhotos
} from "./reducerPhotos";

const initialState = {
  ...initialStateInitialData,
  ...initialStateLocation,
  ...initialStateCategories,
  ...initialStateMenu,
  ...initialStatePhotos
};

const objectReducers = {
  initialData: reducerInitialData,
  location: reducerLocation,
  categories: reducerCategories,
  menu: reducerMenu,
  photos: reducerPhotos
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
