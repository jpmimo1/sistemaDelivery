import React, { useEffect } from "react";
import { Typography, TextField, makeStyles, Grid } from "@material-ui/core";
import SelectsDirection from "./selectsDirection";
import Map from "./map";
import useFirstLocationHandler from "./firstLocationHandler";
import { useRef } from "react";

function ThirdStep({ dataHandler }) {
  const [firstLocation, dispatchFirstLocation] = useFirstLocationHandler();

  const coordsDataHandler = useRef();

  useEffect(() => {
    coordsDataHandler.current = dataHandler.values.coords;
  }, []);

  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Ubicación
      </Typography>
      <Typography color="textSecondary" variant="body2" paragraph>
        Ingrese la información sobre la ubicación de su negocio, trate de ser lo
        mas preciso, al seleccionar la ubicación en el mapa, para que sus
        clientes puedan ubicarlo más rápido.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="direction"
            label="Dirección"
            variant="outlined"
            required
            name="direction"
            value={dataHandler.values.direction}
            onChange={dataHandler.handleChange}
            onBlur={dataHandler.handleBlur}
            error={
              dataHandler.touched.direction && !!dataHandler.errors.direction
            }
            helperText={
              dataHandler.touched.direction && dataHandler.errors.direction
                ? dataHandler.errors.direction
                : ""
            }
          />
        </Grid>
        <SelectsDirection
          dataHandler={dataHandler}
          dispatchFirstLocation={dispatchFirstLocation}
        />
        <Grid item xs={12}>
          <div className={classes.rootMap}>
            <Typography variant="subtitle1" color="textSecondary">
              Localice la ubicación de su negocio
            </Typography>
            <Map
              firstLocation={
                dataHandler.values.coords.lat === 0 &&
                dataHandler.values.coords.lng === 0
                  ? firstLocation.location
                  : coordsDataHandler.current
              }
              setCoords={(coords) => {
                dataHandler.setFieldValue("coords", coords);
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ThirdStep;

const useStyles = makeStyles((theme) => ({
  rootMap: {
    width: "100%",
    height: theme.spacing(25)
  }
}));
