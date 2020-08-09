import React from "react";
import ModalGeneralStyle from "../globals/modalGeneralStyle";
import {
  useCloseDialogVerifyEmail,
  useGetGlobalUser
} from "../globals/globalReducer/actions";
import { Typography } from "@material-ui/core";
import { textToTitleFormat } from "../functions";

function VerifyEmailScreen() {
  const closeModal = useCloseDialogVerifyEmail();
  const user = useGetGlobalUser();

  return (
    <ModalGeneralStyle onClose={closeModal}>
      {user && (
        <>
          <Typography
            variant="h5"
            color="primary"
            paragraph
          >{`Bienvenido ${textToTitleFormat(user.name)}`}</Typography>
          <Typography>
            {`Gracias por su registro. Le enviamos un mensaje a ${user.email} para continuar con la verificación de su correo. Por favor, revise su correo electronico y haga clic en el vinculo que encontrará.`}
          </Typography>
        </>
      )}
    </ModalGeneralStyle>
  );
}

export default VerifyEmailScreen;
