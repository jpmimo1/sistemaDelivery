import { reducer, initialState } from "../reducer";

import fullValidation from "../fullValidation";
import { useReducer } from "react";
import validators from "../validators";

class DataRegisterBusiness {
  constructor(data, dispatchData) {
    this.data = data;
    this.dispatchData = dispatchData;
    this.validators = validators();
  }
  setInitialData = async (initialData) => {
    const initialDataValidated = await fullValidation(
      this.validators.getInitialDataMain(),
      this.validators.getInitialDataWarnings(),
      initialData
    );

    this.dispatchData({
      type: "SET-INITIAL-DATA",
      initialData: initialDataValidated
    });
    return initialDataValidated;
  };
  getInitialData = () => {
    return this.data.initialData;
  };
}

const useDataRegisterBusiness = () => {
  const [data, dispatchData] = useReducer(reducer, initialState);
  return new DataRegisterBusiness(data, dispatchData);
};

export default useDataRegisterBusiness;
