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

Yup.addMethod(Yup.object, "menuEmpty", function () {
  return this.test("menuEmpty", "La carta esta vacía", function (menu) {
    const isEmpty =
      (!menu.dishes || menu.dishes.length === 0) &&
      (!menu.categories || menu.categories.length === 0);

    return !isEmpty;
  });
});

Yup.addMethod(Yup.object, "menuEmpty", function () {
  return this.test("menuEmpty", "La carta esta vacía", function (menu) {
    const isEmpty =
      (!menu.dishes || menu.dishes.length === 0) &&
      (!menu.categories || menu.categories.length === 0);

    return !isEmpty;
  });
});

Yup.addMethod(Yup.object, "menuCategoriesEmpty", function () {
  return this.test("menuCategoriesEmpty", function (menu) {
    //Si esta vacio o no existe el arreglo categorias retornas true
    if (!menu.categories || menu.categories.length === 0) return true;

    const { path, createError } = this;

    const categoriesEmpty = menu.categories.filter(
      (category) => !category.dishes || category.dishes.length === 0
    );

    let errorMessage =
      categoriesEmpty.length === 0
        ? ""
        : categoriesEmpty.reduce((prev, current, i) => {
            return (
              prev +
              current.name +
              (categoriesEmpty.length - 1 === i ? "" : ", ")
            );
          }, "");

    errorMessage =
      categoriesEmpty.length === 1
        ? `La categoría ${errorMessage} esta vacía`
        : `Las categorías (${errorMessage}), estan vacías`;

    return (
      categoriesEmpty.length === 0 ||
      createError({ path, message: errorMessage })
    );
  });
});

export default Yup;
