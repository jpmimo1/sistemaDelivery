import React, { useReducer, useEffect } from "react";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import { Photo as PhotoIcon } from "@material-ui/icons";
import { arrayMove } from "react-sortable-hoc";
import GroupPhotos from "./groupPhotos";
import { useOpenDialog } from "../../hooks";
import AddPhoto from "./modals/addPhoto";

const photosInitialState = [];
const reducerPhotos = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newPhoto = { id: Date.now(), ...action.photo };
      const newPhotos = state.slice();
      newPhotos.push(newPhoto);
      return newPhotos;
    }
    case "REMOVE": {
      const newPhotos = state.filter((photo) => photo.id !== action.id);
      return newPhotos;
    }
    case "UPDATE": {
      const newPhotos = state.map((photo) => {
        if (photo.id !== action.photo.id) return photo;
        return { ...photo, ...action.photo };
      });
      return newPhotos;
    }
    case "REORDER": {
      const newPhotos = arrayMove(state, action.from, action.to);
      return newPhotos;
    }
    default:
      return state;
  }
};

function SixthStep() {
  const [openAdd, dispatchOpenAdd] = useOpenDialog();
  const [photos, dispatchPhotos] = useReducer(
    reducerPhotos,
    photosInitialState
  );

  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Fotos
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Agrege las fotos de su negocio, procure que las fotos tengan una buenas
        resolución, ademas que representen lo mejor de su negocio.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <GroupPhotos photos={photos} dispatchPhotos={dispatchPhotos} />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.divButton}>
            <Button
              color="secondary"
              variant="contained"
              endIcon={<PhotoIcon />}
              onClick={() => {
                dispatchOpenAdd({ type: "OPEN" });
              }}
            >
              Agregar
            </Button>
          </div>
        </Grid>
      </Grid>
      <AddPhoto
        open={openAdd}
        dispatchOpen={dispatchOpenAdd}
        dispatchPhotos={dispatchPhotos}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  divButton: { display: "flex", justifyContent: "flex-end" }
}));

export default SixthStep;
