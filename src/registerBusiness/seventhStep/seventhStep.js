import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import {
  ImportContacts as ImportContactsIcon,
  Room as RoomIcon,
  Photo as PhotoIcon,
  Assignment as AssignmentIcon,
  Ballot as BallotIcon
} from "@material-ui/icons";
import ItemLinkInfo from "./itemLinkInfo";

function SeventhStep() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Resumen
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Felicitaciones, está a punto de completar su registro, a continuación le
        mostramos un resumen con toda la información que completo y la
        información que aun está pendiente, recuerde que puede completar la
        información pendiente despues.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={6}>
          <div className={classes.divLinks}>
            <ItemLinkInfo MainIcon={AssignmentIcon} text="Información Básica" />
            <ItemLinkInfo MainIcon={RoomIcon} text="Ubicación" />
            <ItemLinkInfo MainIcon={BallotIcon} text="Categoría" />
            <ItemLinkInfo MainIcon={ImportContactsIcon} text="Carta" />
            <ItemLinkInfo MainIcon={PhotoIcon} text="Fotos" />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  divLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  link: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  iconLink: {
    marginRight: theme.spacing(1),
    transform: "translateY(-4px)"
  }
}));

export default SeventhStep;
