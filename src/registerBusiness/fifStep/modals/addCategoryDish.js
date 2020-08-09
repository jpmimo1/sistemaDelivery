import React from "react";
import { useFormik } from "formik";
import CategoryGeneral from "./categoryGeneral";

function AddCategoryDish({ open, dispatchOpen, dispatchMenu }) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: ""
    }
  });

  const handleOnAdd = () => {
    dispatchMenu({
      type: "ADD-CATEGORY",
      category: {
        id: Date.now(),
        name: fieldsValues.values.name,
        description: fieldsValues.values.description,
        dishes: []
      }
    });
    fieldsValues.resetForm();
    dispatchOpen({ type: "CLOSE" });
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
    />
  );
}

export default AddCategoryDish;
