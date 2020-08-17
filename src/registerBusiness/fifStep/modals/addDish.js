import React from "react";
import DishGeneral from "./dishGeneral";
import { useFormik } from "formik";
import schemaDish from "./validatorDish";

function AddDish({ open, dispatchOpen, dataHandler }) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: "0",
      photo: null
    },
    validationSchema: schemaDish,
    onSubmit: (values, formikBag) => {
      let idCategory = values.category;
      dataHandler.addDish(
        {
          id: Date.now(),
          name: values.name,
          description: values.description,
          price: values.price,
          photo: values.photo
        },
        idCategory
      );
      formikBag.resetForm();
      dispatchOpen({ type: "CLOSE" });
    }
  });

  const handleOnAdd = () => {
    fieldsValues.submitForm();
  };

  const handleOnClose = () => {
    fieldsValues.resetForm();
    dispatchOpen({ type: "CLOSE" });
  };

  const handleChangePhoto = (imageList) => {
    if (imageList.length > 0) fieldsValues.setFieldValue("photo", imageList[0]);
    else fieldsValues.setFieldValue("photo", null);
  };

  const categoriesRebuild = dataHandler.data.categories.map(({ id, name }) => ({
    id,
    label: name
  }));
  return (
    <DishGeneral
      open={open}
      title={"Agregar Plato"}
      name={fieldsValues.values.name}
      description={fieldsValues.values.description}
      category={fieldsValues.values.category}
      price={fieldsValues.values.price}
      photo={fieldsValues.values.photo}
      errors={fieldsValues.errors}
      touched={fieldsValues.touched}
      handleChange={fieldsValues.handleChange}
      handleBlur={fieldsValues.handleBlur}
      onClose={handleOnClose}
      onCancel={handleOnClose}
      onSuccess={handleOnAdd}
      successLabel={"Agregar"}
      categories={categoriesRebuild}
      handleChangePhoto={handleChangePhoto}
    />
  );
  /*
  categories
  */
}

export default AddDish;
