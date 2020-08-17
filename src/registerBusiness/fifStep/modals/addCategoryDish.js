import React from "react";
import { useFormik } from "formik";
import CategoryGeneral from "./categoryGeneral";
import schemaCategory from "./validatorCategory";

function AddCategoryDish({ open, dispatchOpen, dataHandler }) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: ""
    },
    validationSchema: schemaCategory,
    onSubmit: (values, formikBag) => {
      dataHandler.addCategory({
        id: Date.now(),
        name: values.name,
        description: values.description,
        dishes: []
      });
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

  return (
    <CategoryGeneral
      title={"Agregar Categoría"}
      handleChange={fieldsValues.handleChange}
      name={fieldsValues.values.name}
      description={fieldsValues.values.description}
      onCancel={handleOnClose}
      onSuccess={handleOnAdd}
      open={open}
      onClose={handleOnClose}
      successLabel={"Agregar"}
      handleBlur={fieldsValues.handleBlur}
      errors={fieldsValues.errors}
      touched={fieldsValues.touched}
    />
  );
}

export default AddCategoryDish;
