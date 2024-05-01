import React, { useState } from "react";
import { Typography, TextField, makeStyles } from "@material-ui/core";
import TextFieldPassword from "../generalComponents/TextFieldPassword";
import { useCreateUserWithEmailAndPasswordAndName } from "../firebase/hooks";
import { useOpenDialogVerifyEmail } from "../globals/globalReducer/actions";

import { useRedirectTo } from "../globals/redirects";
import ButtonLoading from "../generalComponents/buttonLoading";

function Register() {
  const classes = useStyles();
  /*Estado del loading */
  const [loading, setLoading] = useState(false);

  /*estados provicionales*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = useCreateUserWithEmailAndPasswordAndName();

  /*controlador del Dialog verify email*/
  const openDialogVerifyEmail = useOpenDialogVerifyEmail();

  const redirectToHome = useRedirectTo();

  const setGeneral = (name, value) => {
    switch (name) {
      case "name": {
        setName(value);
        break;
      }
      case "email": {
        setEmail(value);
        break;
      }
      case "password": {
        setPassword(value);
        break;
      }
      default:
        return;
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setGeneral(name, value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    createUser(email.trim(), password, name.trim())
      .then(({ addDocument, sendEmail, updateProfile }) => {
        const obserdo =
          sendEmail.state || addDocument.state || updateProfile.state;
        obserdo &&
          alert(
            "Se regitro correctamente su cuenta, con algunas observaciones."
          );
        redirectToHome();
        !sendEmail.state && openDialogVerifyEmail();
        setLoading(false);
      })
      .catch((error) => {
        alert("No se pudo registrar al usuario.");
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Typography
        className={classes.title}
        variant="h4"
        color="secondary"
        align="center"
      >
        Registrarse
      </Typography>

      <form onSubmit={onSubmitHandler}>
        <TextField
          className={classes.marginElements}
          label="Nombre"
          fullWidth
          variant="outlined"
          name="name"
          value={name}
          onChange={changeHandler}
        />
        <TextField
          className={classes.marginElements}
          label="Correo"
          fullWidth
          variant="outlined"
          name="email"
          value={email}
          onChange={changeHandler}
          type="email"
        />
        <TextFieldPassword
          label="Contraseña"
          fullWidth
          variant="outlined"
          name="password"
          value={password}
          onChange={changeHandler}
          className={classes.marginElements}
        />
        <ButtonLoading
          color="secondary"
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          sizeProgress={24}
          colorProgress="primary"
          loading={loading}
        >
          Registrarse
        </ButtonLoading>
      </form>
    </div>
  );
}

export default Register;

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(4, 0)
  },
  marginElements: {
    marginBottom: theme.spacing(1)
  }
}));
