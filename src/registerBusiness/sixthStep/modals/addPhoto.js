import React from "react";
import PhotoGeneral from "./photoGeneral";
import { useFormik } from "formik";
import schemaPhoto from "./validatorPhoto";

function AddPhoto({ open, dispatchOpen, dataHandler }) {
  const fieldsValues = useFormik({
    initialValues: {
      description: "",
      photo: null
    },
    validationSchema: schemaPhoto,
    onSubmit: (values, formikBag) => {
      dataHandler.add({
        description: values.description,
        photo: values.photo
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

  const handleChangePhoto = (imageList) => {
    if (imageList.length > 0) fieldsValues.setFieldValue("photo", imageList[0]);
    else fieldsValues.setFieldValue("photo", null);
  };

  return (
    <PhotoGeneral
      title="Agregar Foto"
      open={open}
      onClose={handleOnClose}
      description={fieldsValues.values.description}
      photo={fieldsValues.values.photo}
      handleChange={fieldsValues.handleChange}
      handleChangePhoto={handleChangePhoto}
      successLabel="Agregar"
      onSuccess={handleOnAdd}
      handleBlur={fieldsValues.handleBlur}
      errors={fieldsValues.errors}
      touched={fieldsValues.touched}
    />
  );
}

export default AddPhoto;
