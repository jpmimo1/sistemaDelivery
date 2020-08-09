import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../firebase/context";
import { Button } from "@material-ui/core";

/*Página utilizada para la verificación del email luego del redireccionamiento
desde el correo electronico*/
function VerifyEmail(props) {
  const [successVerification, setSuccessVerification] = useState(false);

  const Firebase = useContext(FirebaseContext);

  const queryString = props.location.search;
  const urlParams = new URLSearchParams(queryString);
  const entries = urlParams.entries();

  const objectParams = {};
  for (const entry of entries) {
    objectParams[entry[0]] = entry[1];
  }

  const { continueUrl, mode, oobCode } = objectParams;
  console.log(continueUrl);
  console.log(mode);
  console.log(oobCode);

  const mensajeError = "No se pudo realizar la veficación";

  useEffect(() => {
    Firebase.auth
      .applyActionCode(oobCode)
      .then((result) => {
        console.log("estos son los resultados" + result);
        setSuccessVerification(true);
        //configuracion en el firestore
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Firebase.auth, oobCode]);

  return (
    <div>
      {"Página de Verificación de Email"}
      {successVerification ? (
        <div>
          {"Verificación realizada correctamente."}
          <Button
            href={continueUrl}
            color="primary"
            variant="contained"
            component="a"
          >
            Continuar
          </Button>
        </div>
      ) : (
        <div>{mensajeError}</div>
      )}
    </div>
  );
}

export default VerifyEmail;
