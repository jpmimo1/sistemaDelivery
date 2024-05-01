import React, { useEffect } from "react";
import PhotoGeneral from "./photoGeneral";
import { useFormik } from "formik";
import schemaPhoto from "./validatorPhoto";

function UpdatePhoto({ open, dispatchOpen, dataHandler, photoItem }) {
  const fieldsValues = useFormik({
    initialValues: {
      description: "",
      photo: null
    },
    validationSchema: schemaPhoto,
    onSubmit: (values) => {
      dataHandler.update({
        ...photoItem,
        description: values.description,
        photo: values.photo
      });
      dispatchOpen({ type: "CLOSE" });
    }
  });

  useEffect(() => {
    const { description, photo } = photoItem;
    fieldsValues.setValues({ description, photo });
  }, []);

  const handleOnUpdate = () => {
    fieldsValues.submitForm();
  };

  const handleOnClose = () => {
    fieldsValues.resetForm();
    dispatchOpen({ type: "CLOSE" });
  };

  const handleChangePhoto = (imageList) => {
    if (imageList && imageList.length > 0)
      fieldsValues.setFieldValue("photo", imageList[0]);
    else fieldsValues.setFieldValue("photo", null);
  };

  return (
    <PhotoGeneral
      title="Modificar Foto"
      open={open}
      onClose={handleOnClose}
      description={fieldsValues.values.description}
      photo={fieldsValues.values.photo}
      handleChange={fieldsValues.handleChange}
      handleChangePhoto={handleChangePhoto}
      successLabel="Modificar"
      onSuccess={handleOnUpdate}
      handleBlur={fieldsValues.handleBlur}
      errors={fieldsValues.errors}
      touched={fieldsValues.touched}
    />
  );
}

export default UpdatePhoto;
