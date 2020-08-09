import React, { useContext } from "react";
import { Dialog, Typography, Button, makeStyles } from "@material-ui/core";
import { breakpointsReturns } from "../../theme/theme";
import ModalGeneralStyle from "../../globals/modalGeneralStyle";
import ContextGlobalReducer from "../../globals/globalReducer/context";
import { useCloseDialogUserRequiredRegisterBusiness } from "../../globals/globalReducer/actions";
import { useRedirectToLogin } from "../../globals/redirects";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1"
  },
  divButton: {
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  }
}));

function UserRequiredRegisterBussiness() {
  const classes = useStyles();
  const fullScreen = breakpointsReturns({
    xs: true,
    sm: true,
    md: false,
    lg: false,
    xl: false
  });
  const [{ dialogUserRequiredRegisterBusiness: open }] = useContext(
    ContextGlobalReducer
  );
  const closeModal = useCloseDialogUserRequiredRegisterBusiness();
  const redirectToLogin = useRedirectToLogin();

  const handleButtonAceptar = () => {
    closeModal();
    redirectToLogin();
  };

  return (
    <Dialog open={open} fullScreen={fullScreen}>
      <ModalGeneralStyle className={classes.root} onClose={() => closeModal()}>
        <Typography variant="h4" color="secondary" paragraph align="center">
          Registro de Negocio
        </Typography>
        <Typography variant="body1">
          Es necesario Iniciar Sesión para poder registrar su negocio.
        </Typography>
        <div className={classes.divButton}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleButtonAceptar}
          >
            Aceptar
          </Button>
        </div>
      </ModalGeneralStyle>
    </Dialog>
  );
}

export default UserRequiredRegisterBussiness;
