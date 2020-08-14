import React from "react";
import { Grid } from "@material-ui/core";
import SelectOutlined from "../../generalComponents/selectOutlined";
import useSelectDirectionDataHandler from "./selectDirectionDataHandler";

function SelectsDirection({ dataHandler, dispatchFirstLocation }) {
  const selectDirectionDataHandler = useSelectDirectionDataHandler(
    dataHandler,
    dispatchFirstLocation
  );

  return (
    <>
      <Grid item xs={6}>
        <SelectOutlined
          required
          id="department"
          name="department"
          idLabel="departament-label"
          label="Departamento"
          data={selectDirectionDataHandler.getDepartaments()}
          noneLabel={"Ninguno"}
          value={selectDirectionDataHandler.getDepartment()}
          onChange={(e) => {
            selectDirectionDataHandler.setDepartment(e.target.value);
          }}
          onBlur={dataHandler.handleBlur}
          error={
            dataHandler.touched.department && !!dataHandler.errors.department
          }
          helperText={
            dataHandler.touched.department && dataHandler.errors.department
              ? dataHandler.errors.department
              : ""
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SelectOutlined
          required
          id="province"
          name="province"
          idLabel="province-label"
          label="Provincia"
          data={selectDirectionDataHandler.getProvinces()}
          noneLabel={"Ninguno"}
          value={selectDirectionDataHandler.getProvince()}
          onChange={(e) => {
            selectDirectionDataHandler.setProvince(e.target.value);
          }}
          onBlur={dataHandler.handleBlur}
          error={dataHandler.touched.province && !!dataHandler.errors.province}
          helperText={
            dataHandler.touched.province && dataHandler.errors.province
              ? dataHandler.errors.province
              : ""
          }
        />
      </Grid>
      <Grid item xs={6}>
        <SelectOutlined
          required
          id="district"
          name="district"
          idLabel="district-label"
          label="Distrito"
          data={selectDirectionDataHandler.getDistricts()}
          noneLabel={"Ninguno"}
          value={selectDirectionDataHandler.getDistrict()}
          onChange={(e) => {
            selectDirectionDataHandler.setDistrict(e.target.value);
          }}
          onBlur={dataHandler.handleBlur}
          error={dataHandler.touched.district && !!dataHandler.errors.district}
          helperText={
            dataHandler.touched.district && dataHandler.errors.district
              ? dataHandler.errors.district
              : ""
          }
        />
      </Grid>
    </>
  );
}

export default SelectsDirection;
