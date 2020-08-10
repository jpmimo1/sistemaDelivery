import React, { useEffect } from "react";
import PhotoGeneral from "./photoGeneral";
import { useFormik } from "formik";

function UpdatePhoto({ open, dispatchOpen, dispatchPhotos, photoItem }) {
  const fieldsValues = useFormik({
    initialValues: {
      description: "",
      photo: null
    }
  });

  useEffect(() => {
    const { description, photo } = photoItem;
    fieldsValues.setValues({ description, photo });
  }, []);

  const handleOnUpdate = () => {
    dispatchPhotos({
      type: "UPDATE",
      photo: {
        ...photoItem,
        description: fieldsValues.values.description,
        photo: fieldsValues.values.photo
      }
    });
    dispatchOpen({ type: "CLOSE" });
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
    />
  );
}

export default UpdatePhoto;
