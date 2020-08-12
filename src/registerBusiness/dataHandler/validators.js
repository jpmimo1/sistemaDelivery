import Yup from "../../validation/validation";

const validationSchema = Yup.object({
  name: Yup.string().required().max(100).label("Nombre"),
  description: Yup.string().max(300).label("Descripción"),
  phone: Yup.string().phoneNumber().label("Teléfono")
});

const validationWarnings = Yup.object({
  description: Yup.string().required("Falta Descripción"),
  phone: Yup.string().required("Falta Número de teléfono")
});
const initialDataValidators = {
  main: validationSchema,
  warnings: validationWarnings
};

class ValidatorRegisterBusiness {
  constructor(initialData) {
    this.initialData = { ...initialData };
  }

  getInitialDataMain = () => {
    return this.initialData.main;
  };
  getInitialDataWarnings = () => {
    return this.initialData.warnings;
  };
}

const validators = () => {
  return new ValidatorRegisterBusiness(initialDataValidators);
};

export default validators;
