import React from "react";
import DishGeneral from "./dishGeneral";
import { useFormik } from "formik";

function AddDish({ open, dispatchOpen, categories, dispatchMenu }) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: "0"
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
            price: fieldsValues.values.price
          }
        })
      : dispatchMenu({
          type: "ADD-DISH-CATEGORY",
          dish: {
            id: Date.now(),
            name: fieldsValues.values.name,
            description: fieldsValues.values.description,
            price: fieldsValues.values.price
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
      handleChange={fieldsValues.handleChange}
      onClose={handleOnClose}
      onCancel={handleOnClose}
      onSuccess={handleOnAdd}
      successLabel={"Agregar"}
      categories={categoriesRebuild}
    />
  );
  /*
  categories
  */
}

export default AddDish;
