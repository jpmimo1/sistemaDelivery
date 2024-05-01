import { useReducer, useEffect } from "react";
import {
  getDepartaments,
  getProvinces,
  getDistricts,
  getDepartment
} from "../../data/ubigeoPeru/functions";

const locationInitialState = {
  department: "",
  province: "",
  district: "",
  departments: getDepartaments(),
  provinces: [],
  districts: []
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-DEPARTMENT":
      return {
        ...state,
        department: action.department,
        province: "",
        district: "",
        provinces: getProvinces(action.department),
        districts: []
      };
    case "CHANGE-PROVINCE":
      return {
        ...state,
        province: action.province,
        district: "",
        districts: getDistricts(action.province)
      };
    case "CHANGE-DISTRICT":
      return { ...state, district: action.district };
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
    this.dataHandler.setValues({
      ...this.dataHandler.values,
      department,
      province: "",
      district: ""
    });

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
    this.dataHandler.setValues({
      ...this.dataHandler.values,
      province,
      district: ""
    });
  };

  setDistrict = (district) => {
    this.dispatchDirectionData({ type: "CHANGE-DISTRICT", district });
    this.dataHandler.setFieldValue("district", district);
  };

  getDepartment = () => {
    return this.direcionData.department;
  };
  getProvince = () => {
    return this.direcionData.province;
  };
  getDistrict = () => {
    return this.direcionData.district;
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
