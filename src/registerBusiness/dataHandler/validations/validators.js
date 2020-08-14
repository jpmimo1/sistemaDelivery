import allValidatorsList from "./allValidatorsList";

class ValidatorRegisterBusiness {
  constructor(initialData, location) {
    this.initialData = { ...initialData };
    this.location = { ...location };
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
}

const validators = () => {
  return new ValidatorRegisterBusiness(
    allValidatorsList.initialDataValidators,
    allValidatorsList.locationValidators
  );
};

export default validators;
