import allValidatorsList from "./allValidatorsList";

class ValidatorRegisterBusiness {
  constructor(initialData, location, categories, menu, photos) {
    this.initialData = { ...initialData };
    this.location = { ...location };
    this.categories = { ...categories };
    this.menu = { ...menu };
    this.photos = { ...photos };
  }

  getInitialDataMain = () => {
    return this.initialData.main;
  };
  getInitialDataWarnings = () => {
    return this.initialData.warnings;
  };

  getLocationMain = () => {
    return this.location.main;
  };
  getLocationWarnings = () => {
    return this.location.warnings;
  };
  getCategoriesMain = () => {
    return this.categories.main;
  };
  getCategoriesWarnings = () => {
    return this.categories.warnings;
  };
  getMenuMain = () => {
    return this.menu.main;
  };
  getMenuWarnings = () => {
    return this.menu.warnings;
  };
  getPhotosMain = () => {
    return this.photos.main;
  };
  getPhotosWarnings = () => {
    return this.photos.warnings;
  };
}

const validators = () => {
  return new ValidatorRegisterBusiness(
    allValidatorsList.initialDataValidators,
    allValidatorsList.locationValidators,
    allValidatorsList.categoriesValidators,
    allValidatorsList.menuValidators,
    allValidatorsList.photosValidators
  );
};

export default validators;
