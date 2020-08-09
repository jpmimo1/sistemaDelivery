import React from "react";
import { Dialog } from "@material-ui/core";
import AuthScreem from "./authScreem";
import {
  useActualPath,
  useRedirectToLogin,
  useRedirectTo
} from "../globals/redirects";
import { paths } from "../globals/constants";
import { breakpointsReturns } from "../theme/theme";

const { auth, login, register } = paths;

function DialogAuth() {
  const pathActual = useActualPath();
  const redirectLogin = useRedirectToLogin(),
    redirectToHome = useRedirectTo();

  pathActual === auth && redirectLogin();

  const isLogin = pathActual === login,
    isRegister = pathActual === register;

  const fullScreen = breakpointsReturns({
    xs: true,
    sm: true,
    md: false,
    lg: false,
    xl: false
  });

  return (
    <Dialog
      open={isLogin || isRegister}
      onClose={() => {
        redirectToHome();
      }}
      fullScreen={fullScreen}
      maxWidth="xs"
    >
      <AuthScreem />
    </Dialog>
  );
}

export default DialogAuth;
