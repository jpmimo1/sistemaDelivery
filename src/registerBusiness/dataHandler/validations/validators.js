import allValidatorsList from "./allValidatorsList";

class ValidatorRegisterBusiness {
  constructor(initialData, location, categories) {
    this.initialData = { ...initialData };
    this.location = { ...location };
    this.categories = { ...categories };
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
}

const validators = () => {
  return new ValidatorRegisterBusiness(
    allValidatorsList.initialDataValidators,
    allValidatorsList.locationValidators,
    allValidatorsList.categoriesValidators
  );
};

export default validators;
