import React, { useEffect } from "react";
import CategoryGeneral from "./categoryGeneral";
import { useFormik } from "formik";
import schemaCategory from "./validatorCategory";

function UpdateCategoryDish({
  id,
  name,
  description,
  open,
  dispatchOpen,
  dataHandler
}) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: ""
    },
    validationSchema: schemaCategory,
    onSubmit: (values) => {
      dataHandler.updateCategory({
        id,
        name: values.name,
        description: values.description
      });
      dispatchOpen({ type: "CLOSE" });
    }
  });

  useEffect(() => {
    fieldsValues.setValues({ name, description });
  }, []);

  const handleOnClose = () => {
    dispatchOpen({ type: "CLOSE" });
  };

  const handleOnUpdate = () => {
    fieldsValues.submitForm();
  };

  return (
    <CategoryGeneral
      title={"Modificar Categoría"}
      handleChange={fieldsValues.handleChange}
      name={fieldsValues.values.name}
      description={fieldsValues.values.description}
      onCancel={handleOnClose}
      onSuccess={handleOnUpdate}
      open={open}
      onClose={handleOnClose}
      successLabel={"Modificar"}
      handleBlur={fieldsValues.handleBlur}
      errors={fieldsValues.errors}
      touched={fieldsValues.touched}
    />
  );
}

export default UpdateCategoryDish;
