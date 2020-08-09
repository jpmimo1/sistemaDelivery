import React, { useEffect } from "react";
import DishGeneral from "./dishGeneral";
import { useFormik } from "formik";

function UpdateDish({
  id,
  name,
  description,
  price,
  category,
  open,
  dispatchOpen,
  categories,
  dispatchMenu
}) {
  const fieldsValues = useFormik({
    initialValues: {
      name: "",
      description: "",
      category: "",
      price: "0"
    }
  });

  useEffect(() => {
    fieldsValues.setValues({ name, description, category, price });
  }, [open]);

  const handleOnClose = () => {
    dispatchOpen({ type: "CLOSE" });
  };

  const handleOnUpdate = () => {
    dispatchMenu({
      type: "UPDATE-DISH",
      dish: {
        id,
        name: fieldsValues.values.name,
        description: fieldsValues.values.description,
        price: fieldsValues.values.price
      },
      idCategory: fieldsValues.values.category
    });
    dispatchOpen({ type: "CLOSE" });
  };

  const categoriesRefactor = categories.map(({ id, name }) => ({
    id,
    label: name
  }));

  return (
    <DishGeneral
      title={"Modificar Plato"}
      name={fieldsValues.values.name}
      description={fieldsValues.values.description}
      category={fieldsValues.values.category}
      price={fieldsValues.values.price}
      handleChange={fieldsValues.handleChange}
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
