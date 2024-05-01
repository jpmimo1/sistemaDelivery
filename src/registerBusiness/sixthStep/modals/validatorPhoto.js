import Yup from "../../../validation/validation";

const schemaPhoto = Yup.object({
  photo: Yup.object()
    .typeError("Debe seleccionar una foto para continuar")
    .label("Foto"),
  description: Yup.string().max(300).label("Descripción")
});

export default schemaPhoto;
