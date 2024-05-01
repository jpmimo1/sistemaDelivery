import { reducer, initialState } from "../reducer";

import fullValidation from "../validations/fullValidation";
import { useReducer } from "react";
import validators from "../validations/validators";

class DataRegisterBusiness {
  constructor(data, dispatchData) {
    this.data = data;
    this.dispatchData = dispatchData;
    this.validators = validators();
  }

  //Initial Data actions
  setInitialData = async (initialData) => {
    const initialDataValidated = await fullValidation(
      this.validators.getInitialDataMain(),
      this.validators.getInitialDataWarnings(),
      initialData
    );

    this.dispatchData({
      type: "SET-INITIAL-DATA",
      initialData: initialDataValidated
    });
    return initialDataValidated;
  };
  getInitialData = () => {
    return this.data.initialData;
  };
  //Location actions
  setLocation = async (location) => {
    const locationValidated = await fullValidation(
      this.validators.getLocationMain(),
      this.validators.getLocationWarnings(),
      location
    );

    this.dispatchData({ type: "SET-LOCATION", location: locationValidated });
    return locationValidated;
  };
  getLocation = () => {
    return this.data.location;
  };

  //Categories actions
  setCategories = async (categories) => {
    const categoriesValidated = await fullValidation(
      this.validators.getCategoriesMain(),
      this.validators.getCategoriesWarnings(),
      categories
    );

    this.dispatchData({
      type: "SET-CATEGORIES",
      categories: categoriesValidated
    });
    return categoriesValidated;
  };
  getCategories = () => {
    return this.data.categories;
  };

  //Menu actions
  setMenu = async (menu) => {
    const menuValidated = await fullValidation(
      this.validators.getMenuMain(),
      this.validators.getMenuWarnings(),
      menu
    );

    this.dispatchData({
      type: "SET-MENU",
      menu: menuValidated
    });
    return menuValidated;
  };
  getMenu = () => {
    return this.data.menu;
  };

  //Photos actions
  setPhotos = async (photos) => {
    const photosValidated = await fullValidation(
      this.validators.getPhotosMain(),
      this.validators.getPhotosWarnings(),
      photos
    );
    this.dispatchData({
      type: "SET-PHOTOS",
      photos: photosValidated
    });
    return photosValidated;
  };
  getPhotos = () => {
    return this.data.photos;
  };
}

const useDataRegisterBusiness = () => {
  const [data, dispatchData] = useReducer(reducer, initialState);
  return new DataRegisterBusiness(data, dispatchData);
};

export default useDataRegisterBusiness;
