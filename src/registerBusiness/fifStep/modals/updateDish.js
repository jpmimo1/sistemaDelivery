import React, { useEffect } from "react";
import DishGeneral from "./dishGeneral";
import { useFormik } from "formik";
import schemaDish from "./validatorDish";

function UpdateDish({
  id,
  name,
  description,
  price,
  category,
  photo,
  open,
  dispatchOpen,
  dataHandler
}) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: "0",
      photo: null
    },
    validationSchema: schemaDish,
    onSubmit: (values) => {
      dataHandler.updateDish(
        {
          id,
          name: values.name,
          description: values.description,
          price: values.price,
          photo: values.photo
        },
        values.category
      );
      dispatchOpen({ type: "CLOSE" });
    }
  });

  useEffect(() => {
    fieldsValues.setValues({ name, description, category, price, photo });
  }, [open]);

  const handleOnClose = () => {
    dispatchOpen({ type: "CLOSE" });
  };

  const handleOnUpdate = () => {
    fieldsValues.submitForm();
  };

  const handleChangePhoto = (imageList) => {
    if (imageList && imageList.length > 0)
      fieldsValues.setFieldValue("photo", imageList[0]);
    else fieldsValues.setFieldValue("photo", null);
  };

  const categoriesRefactor = dataHandler.data.categories.map(
    ({ id, name }) => ({
      id,
      label: name
    })
  );

  return (
    <DishGeneral
      title={"Modificar Plato"}
      name={fieldsValues.values.name}
      description={fieldsValues.values.description}
      category={fieldsValues.values.category}
      price={fieldsValues.values.price}
      photo={fieldsValues.values.photo}
      errors={fieldsValues.errors}
      touched={fieldsValues.touched}
      handleChange={fieldsValues.handleChange}
      handleChangePhoto={handleChangePhoto}
      handleBlur={fieldsValues.handleBlur}
      categories={categoriesRefactor}
      open={open}
      successLabel={"Modificar"}
      onClose={handleOnClose}
      onCancel={handleOnClose}
      onSuccess={handleOnUpdate}
    />
  );
}

export default UpdateDish;
