import Yup from "../../../validation/validation";

const schemaDish = Yup.object({
  name: Yup.string().required().max(100).label("Nombre"),
  price: Yup.number()
    .typeError("Precio no valido, ingrese un número")
    .required()
    .positive("Debe ingresar un precio mayor que 0")
    .label("Precio"),
  description: Yup.string().max(300).label("Descripción"),
  category: Yup.string()
});

export default schemaDish;
