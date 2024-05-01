import React from "react";
import { Typography } from "@material-ui/core";

function FirstStep() {
  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Registro
      </Typography>
      <Typography color="textSecondary" variant="body2" paragraph>
        Bienvenido a delivery.com, esta a punto de registrar su negocio con
        nosotros, para poder continuar haga click en siguiente
      </Typography>
    </>
  );
}

export default FirstStep;
