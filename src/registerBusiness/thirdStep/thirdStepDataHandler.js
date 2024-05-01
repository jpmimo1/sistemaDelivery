import validators from "../dataHandler/validations/validators";
import { useFormik } from "formik";

const validator = validators().getLocationMain();
const useThirdStepData = () => {
  return useFormik({
    initialValues: {
      direction: "",
      department: "",
      province: "",
      district: "",
      coords: {
        lat: 0,
        lng: 0
      }
    },
    validationSchema: validator
  });
};

export default useThirdStepData;
