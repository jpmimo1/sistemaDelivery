import React from "react";
import { Typography, Grid, Button, makeStyles } from "@material-ui/core";
import { Photo as PhotoIcon } from "@material-ui/icons";
import GroupPhotos from "./groupPhotos";
import { useOpenDialog } from "../../hooks";
import AddPhoto from "./modals/addPhoto";
import useSixthStepData from "./sixthStepDataHandler";

function SixthStep({ dataHandler }) {
  const [openAdd, dispatchOpenAdd] = useOpenDialog();

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
          <GroupPhotos dataHandler={dataHandler} />
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
        dataHandler={dataHandler}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  divButton: { display: "flex", justifyContent: "flex-end" }
}));

export default SixthStep;
