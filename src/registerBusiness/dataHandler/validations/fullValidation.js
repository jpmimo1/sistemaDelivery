/*Esta funcion retorna una promesa
si la promesa se resuelve te retorna tu objeto validado 
o tambien el objeto con warnings que puedieran existir, 
o el objeto con los errores, esta promesa no se rechaza
si lanza error lo concatena al objeto de error  */

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
    fullObject = newObject;
  } catch (errors) {
    return { data: fullObject, errors };
  }
  try {
    const newObject = await warningValidationSchema.validate(
      prevObject,
      optionsValidation
    );
    return { data: newObject };
  } catch ({ errors }) {
    return { data: fullObject, warnings: errors };
  }
};

export default fullValidation;
