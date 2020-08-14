import validators from "../dataHandler/validations/validators";
import { useFormik } from "formik";

const validator = validators().getInitialDataMain();
const useFirstStepData = () => {
  return useFormik({
    initialValues: { name: "", description: "", phone: "" },
    validationSchema: validator
  });
};

export default useFirstStepData;
