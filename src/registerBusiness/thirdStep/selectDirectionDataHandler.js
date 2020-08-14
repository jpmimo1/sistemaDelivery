import { useReducer, useEffect } from "react";
import {
  getDepartaments,
  getProvinces,
  getDistricts,
  getDepartment
} from "../../data/ubigeoPeru/functions";

const locationInitialState = {
  departments: getDepartaments(),
  provinces: [],
  districts: []
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-DEPARTMENT":
      return {
        ...state,
        provinces: getProvinces(action.department),
        districts: []
      };
    case "CHANGE-PROVINCE":
      return {
        ...state,
        districts: getDistricts(action.province)
      };
    default:
      return state;
  }
};

class SelectDirectionDataHandler {
  constructor(
    direcionData,
    dispatchDirectionData,
    dataHandler,
    dispatchFirstLocation
  ) {
    this.direcionData = direcionData;
    this.dispatchDirectionData = dispatchDirectionData;
    this.dataHandler = dataHandler;
    this.dispatchFirstLocation = dispatchFirstLocation;
  }

  setDirectionFirstTime = () => {
    const { department, province, district } = this.dataHandler.values;
    this.dispatchDirectionData({ type: "CHANGE-DEPARTMENT", department });
    this.dispatchDirectionData({ type: "CHANGE-PROVINCE", province });
    this.dispatchDirectionData({ type: "CHANGE-DISTRICT", district });
  };

  setDepartment = (department) => {
    this.dispatchDirectionData({ type: "CHANGE-DEPARTMENT", department });
    this.dataHandler.setFieldValue("department", department);
    this.dataHandler.setFieldValue("province", "");
    this.dataHandler.setFieldValue("district", "");
    if (department !== "") {
      const departmentData = getDepartment(department);
      this.dispatchFirstLocation({
        type: "SET-LOCATION",
        location: departmentData.location
      });
    }
  };

  setProvince = (province) => {
    this.dispatchDirectionData({ type: "CHANGE-PROVINCE", province });
    this.dataHandler.setFieldValue("province", province);
    this.dataHandler.setFieldValue("district", "");
  };

  setDistrict = (district) => {
    this.dataHandler.setFieldValue("district", district);
  };

  getDepartment = () => {
    return this.dataHandler.values.department;
  };
  getProvince = () => {
    return this.dataHandler.values.province;
  };
  getDistrict = () => {
    return this.dataHandler.values.district;
  };
  getDepartaments = () => {
    return this.direcionData.departments;
  };
  getProvinces = () => {
    return this.direcionData.provinces;
  };
  getDistricts = () => {
    return this.direcionData.districts;
  };
}

const useSelectDirectionDataHandler = (dataHandler, dispatchFirstLocation) => {
  const [direcionData, dispatchDirectionData] = useReducer(
    locationReducer,
    locationInitialState
  );

  const selectDirectionDataHandler = new SelectDirectionDataHandler(
    direcionData,
    dispatchDirectionData,
    dataHandler,
    dispatchFirstLocation
  );

  useEffect(() => {
    selectDirectionDataHandler.setDirectionFirstTime();
  }, []);

  return selectDirectionDataHandler;
};

export default useSelectDirectionDataHandler;
