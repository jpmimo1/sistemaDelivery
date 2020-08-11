/*Esta funcion retorna una promesa
si la promesa se resuelve te retorna tu objeto validado 
o tambien el objeto con warnings que puedieran existir, 
si se rechaza la promesa te retorna solamente los errores */

const fullValidation = async (
  mainValidationSchema,
  warningValidationSchema,
  object
) => {
  const optionsValidation = {
    abortEarly: false
  };
  const keyObject = Object.keys(object)[0];
  const prevObject = object[keyObject];
  let fullObject = object[keyObject];
  try {
    const newObject = await mainValidationSchema.validate(
      prevObject,
      optionsValidation
    );
    fullObject = { ...fullObject, ...newObject };
  } catch (errors) {
    return { [keyObject]: { ...fullObject }, errors };
  }
  try {
    const newObject = await warningValidationSchema.validate(
      prevObject,
      optionsValidation
    );
    return { [keyObject]: { ...fullObject, ...newObject } };
  } catch ({ errors }) {
    return { [keyObject]: fullObject, warnings: errors };
  }
};

export default fullValidation;
