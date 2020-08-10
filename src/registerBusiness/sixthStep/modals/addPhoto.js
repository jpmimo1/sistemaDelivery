import React from "react";
import PhotoGeneral from "./photoGeneral";
import { useFormik } from "formik";

function AddPhoto({ open, dispatchOpen, dispatchPhotos }) {
  const fieldsValues = useFormik({
    initialValues: {
      description: "",
      photo: null
    }
  });

  const handleOnAdd = () => {
    dispatchPhotos({
      type: "ADD",
      photo: {
        description: fieldsValues.values.description,
        photo: fieldsValues.values.photo
      }
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
    />
  );
}

export default AddPhoto;
