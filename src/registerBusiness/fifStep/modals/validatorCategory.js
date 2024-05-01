const { default: Yup } = require("../../../validation/validation");

const schemaCategory = Yup.object({
  name: Yup.string().required().max(100).label("Nombre"),
  description: Yup.string().max(300).label("Descripción")
});

export default schemaCategory;
