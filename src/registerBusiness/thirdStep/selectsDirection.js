import React, { useReducer } from "react";
import { Grid } from "@material-ui/core";
import SelectOutlined from "../../generalComponents/selectOutlined";
import {
  getDistricts,
  getProvinces,
  getDepartaments
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
      return {
        ...state,
        district: action.district
      };
    default:
      return state;
  }
};

function SelectsDirection() {
  const [
    { department, province, district, departments, provinces, districts },
    dispatch
  ] = useReducer(locationReducer, locationInitialState);
  return (
    <>
      <Grid item xs={6}>
        <SelectOutlined
          id="departament"
          idLabel="departament-label"
          label="Departamento"
          data={departments}
          noneLabel={"Ninguno"}
          value={department}
          onChange={(e) => {
            dispatch({
              type: "CHANGE-DEPARTMENT",
              department: e.target.value
            });
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectOutlined
          id="province"
          idLabel="province-label"
          label="Provincia"
          data={provinces}
          noneLabel={"Ninguno"}
          value={province}
          onChange={(e) => {
            dispatch({
              type: "CHANGE-PROVINCE",
              province: e.target.value
            });
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <SelectOutlined
          id="district"
          idLabel="district-label"
          label="Distrito"
          data={districts}
          noneLabel={"Ninguno"}
          value={district}
          onChange={(e) => {
            dispatch({
              type: "CHANGE-DISTRICT",
              district: e.target.value
            });
          }}
        />
      </Grid>
    </>
  );
}

export default SelectsDirection;
