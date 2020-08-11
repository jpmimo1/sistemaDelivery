import React, { useReducer, useRef, useEffect } from "react";
import { Typography, TextField, makeStyles, Grid } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";
//import { Room as RoomIcon } from "@material-ui/icons";
import SelectsDirection from "./selectsDirection";

const coordsMapInitialState = { latitude: 0, longitude: 0 };
const coordsMapReducer = (state, action) => {
  switch (action.type) {
    case "SET-COORDS-MAP":
      return { latitude: action.latitude, longitude: action.longitude };
    default:
      return state;
  }
};

function ThirdStep(props) {
  const [{ latitude, longitude }, dispatchCoordMap] = useReducer(
    coordsMapReducer,
    coordsMapInitialState
  );
  const mapRef = useRef();
  const mapsRef = useRef();
  const classes = useStyles();

  let Map = null;

  useEffect(() => {
    if (props.coords) {
      dispatchCoordMap({
        type: "SET-COORDS-MAP",
        latitude: props.coords.latitude,
        longitude: props.coords.longitude
      });
    }
  }, [props.coords]);

  if (props.coords) {
    Map = (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD7lomCpkrOCqsR4yFw-PewpOb8sIyUju4" }}
        defaultCenter={{
          lat: props.coords.latitude,
          lng: props.coords.longitude
        }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => {
          mapsRef.current = maps;
          mapRef.current = map;
          let marker = new maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map
          });
          map.addListener("center_changed", () => {
            marker.setPosition(map.getCenter());
          });
        }}
      >
        {/*
        <div
          lat={latitude}
          lng={longitude}
          style={{
            height: "35px",
            width: "35px",
            transform: "translate(-50%, -100%)"
          }}
        >
          <RoomIcon color="secondary" fontSize="large" />
        </div>*/}
      </GoogleMapReact>
    );
  }

  const timer = useRef();

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      mapRef.current.addListener("center_changed", () => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          dispatchCoordMap({
            type: "SET-COORDS-MAP",
            latitude: mapRef.current.getCenter().lat(),
            longitude: mapRef.current.getCenter().lng()
          });
        }, 20);
      });
    }
  });

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
          />
        </Grid>
        <SelectsDirection />
        <Grid item xs={12}>
          <div className={classes.rootMap}>
            <Typography variant="subtitle1" color="textSecondary">
              Localice la ubicación de su negocio
            </Typography>
            {Map}
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
