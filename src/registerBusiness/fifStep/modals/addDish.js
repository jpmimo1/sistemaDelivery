import React from "react";
import DishGeneral from "./dishGeneral";
import { useFormik } from "formik";

function AddDish({ open, dispatchOpen, categories, dispatchMenu }) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: "0",
      photo: null
    }
  });

  const handleOnAdd = () => {
    let idCategory = fieldsValues.values.category;
    idCategory === ""
      ? dispatchMenu({
          type: "ADD-DISH",
          dish: {
            id: Date.now(),
            name: fieldsValues.values.name,
            description: fieldsValues.values.description,
            price: fieldsValues.values.price,
            photo: fieldsValues.values.photo
          }
        })
      : dispatchMenu({
          type: "ADD-DISH-CATEGORY",
          dish: {
            id: Date.now(),
            name: fieldsValues.values.name,
            description: fieldsValues.values.description,
            price: fieldsValues.values.price,
            photo: fieldsValues.values.photo
          },
          idCategory
        });
    fieldsValues.resetForm();
    dispatchOpen({ type: "CLOSE" });
  };

  const handleOnClose = () => {
    fieldsValues.resetForm();
    dispatchOpen({ type: "CLOSE" });
  };

  const handleChangePhoto = (imageList) => {
    if (imageList.length > 0) fieldsValues.setFieldValue("photo", imageList[0]);
    else fieldsValues.setFieldValue("photo", null);
  };

  const categoriesRebuild = categories.map(({ id, name }) => ({
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
      handleChange={fieldsValues.handleChange}
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
