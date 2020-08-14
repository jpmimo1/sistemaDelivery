import React from "react";
import { Typography, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2)
  }
}));

function SecondStep({ dataHandler }) {
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
        required
        name="name"
        value={dataHandler.values.name}
        onChange={dataHandler.handleChange}
        onBlur={dataHandler.handleBlur}
        error={dataHandler.touched.name && !!dataHandler.errors.name}
        helperText={
          dataHandler.touched.name && dataHandler.errors.name
            ? dataHandler.errors.name
            : ""
        }
      />
      <TextField
        error={
          dataHandler.touched.description && !!dataHandler.errors.description
        }
        helperText={
          dataHandler.touched.description && dataHandler.errors.description
            ? dataHandler.errors.description
            : ""
        }
        className={classes.textField}
        fullWidth
        id="description"
        label="Descripción"
        multiline={true}
        rows={3}
        variant="outlined"
        name="description"
        value={dataHandler.values.description}
        onChange={dataHandler.handleChange}
        onBlur={dataHandler.handleBlur}
      />
      <TextField
        error={dataHandler.touched.phone && !!dataHandler.errors.phone}
        helperText={
          dataHandler.touched.phone && dataHandler.errors.phone
            ? dataHandler.errors.phone
            : ""
        }
        className={classes.textField}
        fullWidth
        id="phone"
        label="Teléfono"
        variant="outlined"
        name="phone"
        value={dataHandler.values.phone}
        onChange={dataHandler.handleChange}
        onBlur={dataHandler.handleBlur}
      />
    </>
  );
}

export default SecondStep;
