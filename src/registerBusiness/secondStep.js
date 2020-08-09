import React from "react";
import { Typography, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2)
  }
}));

function SecondStep() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Datos Iniciales
      </Typography>
      <Typography variant="body1" paragraph>
        Ingrese los datos básicos de su negocio, el nombre, una descripción y el
        numero de télefono.
      </Typography>
      <TextField
        className={classes.textField}
        fullWidth
        id="name"
        label="Nombre"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        fullWidth
        id="description"
        label="Descripción"
        multiline={true}
        rows={3}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        fullWidth
        id="phone"
        label="Teléfono"
        variant="outlined"
      />
    </>
  );
}

export default SecondStep;
