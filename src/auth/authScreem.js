import React from "react";

import { Tabs, Tab, makeStyles } from "@material-ui/core";
import Register from "./register";
import Login from "./login";
import {
  useRedirectToLogin,
  useRedirectToRegister,
  useActualPath,
  useRedirectTo
} from "../globals/redirects";
import { paths } from "../globals/constants";
import ModalGeneralStyle from "../globals/modalGeneralStyle";

const { register: registerPath } = paths;

function AuthScreem() {
  const classes = useStyles();

  const redirectToLogin = useRedirectToLogin(),
    redirectToRegister = useRedirectToRegister(),
    redirectToHome = useRedirectTo();
  const pathActual = useActualPath();

  const handleAuthType = (e, i) => {
    i === 0 ? redirectToRegister() : redirectToLogin();
  };

  const tabActual = pathActual === registerPath ? 0 : 1;

  return (
    <ModalGeneralStyle onClose={redirectToHome}>
      <div>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          aria-label="Auth tabs"
          onChange={handleAuthType}
          value={tabActual}
          variant="fullWidth"
        >
          <Tab label="Registrarse" />
          <Tab label="Ingresar" />
        </Tabs>
      </div>
      <div className={classes.rootForm}>
        {tabActual === 0 ? <Register /> : <Login />}
      </div>
    </ModalGeneralStyle>
  );
}

export default AuthScreem;

const useStyles = makeStyles((theme) => ({
  rootForm: {
    marginTop: theme.spacing(2)
  }
}));
