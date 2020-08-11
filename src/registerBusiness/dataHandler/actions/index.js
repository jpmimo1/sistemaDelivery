import { reducer, initialState } from "../reducer";
import Yup from "../../../validation/validation";

import fullValidation from "../fullValidation";
import { useReducer } from "react";

const validationSchema = Yup.object({
  name: Yup.string().required().max(100),
  description: Yup.string().max(300),
  phone: Yup.string().phoneNumber()
});

const validationWarnings = Yup.object({
  description: Yup.string().required("Falta Descripción"),
  phone: Yup.string().required("Falta Número de teléfono")
});

class DataRegisterBusiness {
  constructor(data, dispatchData) {
    this.data = data;
    this.dispatchData = dispatchData;
  }
  setInitialData = async (initialData) => {
    const initialDataValidated = await fullValidation(
      validationSchema,
      validationWarnings,
      initialData
    );
    this.dispatchData({
      type: "SET-INITIAL-DATA",
      initialData: initialDataValidated
    });
  };
}

const useDataRegisterBusiness = () => {
  const [data, dispatchData] = useReducer(reducer, initialState);
  return new DataRegisterBusiness(data, dispatchData);
};

export default useDataRegisterBusiness;
