import Yup from "../../../validation/validation";

/*Initial Data validators */
const initialDataValidationMain = Yup.object({
  name: Yup.string().required().max(100).label("Nombre"),
  description: Yup.string().max(300).label("Descripción"),
  phone: Yup.string().phoneNumber().label("Teléfono")
});

const initialDataValidationWarnings = Yup.object({
  description: Yup.string().required("Falta Descripción"),
  phone: Yup.string().required("Falta Número de teléfono")
});

const initialDataValidators = {
  main: initialDataValidationMain,
  warnings: initialDataValidationWarnings
};

/*Location Validators */
const locationValidationMain = Yup.object({
  direction: Yup.string().required().max(200).label("Dirección"),
  department: Yup.string().required().label("Departamento"),
  province: Yup.string().required().label("Provincia"),
  district: Yup.string().required().label("Distrito"),
  coords: Yup.object({
    lat: Yup.number().label("Latitud"),
    lng: Yup.number().label("Longitud")
  })
});
const locationValidationWarnings = Yup.object();

const locationValidators = {
  main: locationValidationMain,
  warnings: locationValidationWarnings
};

/*Categories Validators */
const categoriesValidationMain = Yup.array()
  .required("Debe seleccionar al menos un elemento")
  .label("Categorias");

const categoriesValidationWarnings = Yup.array();

const categoriesValidators = {
  main: categoriesValidationMain,
  warnings: categoriesValidationWarnings
};

/*Menu Validators */
const menuValidationMain = Yup.object();
const menuValidationWarnings = Yup.object().menuEmpty().menuCategoriesEmpty();
const menuValidators = {
  main: menuValidationMain,
  warnings: menuValidationWarnings
};

/*Photos Validators */
const photosValidationMain = Yup.array();
const photosValidationWarnings = Yup.array()
  .required("No se agregaron fotos")
  .label("Fotos");
const photosValidators = {
  main: photosValidationMain,
  warnings: photosValidationWarnings
};

/*List all validators*/
const allValidatorsList = {
  initialDataValidators,
  locationValidators,
  categoriesValidators,
  menuValidators,
  photosValidators
};

export default allValidatorsList;
