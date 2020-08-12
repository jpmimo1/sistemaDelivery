import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Este campo es requerido para continuar"
  },
  string: {
    max: "Valor muy largo debes ingresar como máximo ${max} caracteres",
    min: "Valor muy corto debes ingresar como mínimo ${min} caracteres"
  }
});

Yup.addMethod(Yup.string, "phoneNumber", function () {
  return this.test("phoneNumber", "Número de teléfono invalido", function (
    value
  ) {
    const regExpTel = /\d{9}/;
    return !value || value === "" || regExpTel.test(value) || false;
  });
});

export default Yup;
