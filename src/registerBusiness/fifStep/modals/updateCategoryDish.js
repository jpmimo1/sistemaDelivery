import React, { useEffect } from "react";
import CategoryGeneral from "./categoryGeneral";
import { useFormik } from "formik";

function UpdateCategoryDish({
  id,
  name,
  description,
  open,
  dispatchOpen,
  dispatchMenu
}) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: ""
    }
  });

  useEffect(() => {
    fieldsValues.setValues({ name, description });
  }, []);

  const handleOnClose = () => {
    dispatchOpen({ type: "CLOSE" });
  };

  const handleOnUpdate = () => {
    dispatchMenu({
      type: "UPDATE-CATEGORY",
      category: {
        id,
        name: fieldsValues.values.name,
        description: fieldsValues.values.description
      }
    });
    dispatchOpen({ type: "CLOSE" });
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
    />
  );
}

export default UpdateCategoryDish;
