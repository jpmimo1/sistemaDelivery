import React, { useContext } from "react";
import { Dialog } from "@material-ui/core";
import VerifyEmailScreen from "./verifyEmailScreen";
import ContextGlobalReducer from "../globals/globalReducer/context";
import { useCloseDialogVerifyEmail } from "../globals/globalReducer/actions";

function DialogVerifyEmail() {
  const [{ dialogVerifyEmail }] = useContext(ContextGlobalReducer);
  const cerrar = useCloseDialogVerifyEmail();

  return (
    <Dialog open={dialogVerifyEmail} onClose={() => cerrar()} maxWidth="sm">
      <VerifyEmailScreen />
    </Dialog>
  );
}

export default DialogVerifyEmail;
