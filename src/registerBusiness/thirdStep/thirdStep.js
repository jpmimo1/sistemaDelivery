import React, { useState, useEffect } from "react";
import { Typography, TextField, makeStyles, Grid } from "@material-ui/core";
import { geolocated } from "react-geolocated";
import SelectsDirection from "./selectsDirection";
import Map from "./map";
import useFirstLocationHandler from "./firstLocationHandler";

function ThirdStep({ dataHandler }) {
  const [firstLocation, dispatchFirstLocation] = useFirstLocationHandler();
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    console.log(coords);
  }, [coords]);

  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Ubicación
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
            <Map firstLocation={firstLocation.location} setCoords={setCoords} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(ThirdStep);

const useStyles = makeStyles((theme) => ({
  rootMap: {
    width: "100%",
    height: theme.spacing(25)
  }
}));
