import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Link,
  makeStyles
} from "@material-ui/core";
import TextFieldPassword from "../generalComponents/TextFieldPassword";
import { Facebook as FacebookIcon, Google as GoogleIcon } from "../icons";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignInWithFacebook,
  useGetRedirectResult
} from "../firebase/hooks";
import { useRedirectTo } from "../globals/redirects";

function Login(props) {
  const classes = useStyles();
  /*hook de email and password */
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const valueAndHisSet = {
    email: setEmail,
    password: setPassword
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    valueAndHisSet[name](value);
  };

  //login user
  const loginUserWithEmailAndPassword = useSignInWithEmailAndPassword();
  //const [{ user }] = useContext(ContextGlobalReducer);
  const redirectToHome = useRedirectTo();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    loginUserWithEmailAndPassword(email, password)
      .then(() => {
        //TODO: modificar para que el alert lo realize en un ventana emergente o simplemente no lo haga, tambien se puedo optar un loading global
        redirectToHome();
      })
      .catch((error) => {
        console.log(error);
        alert(
          "No se pudo iniciar sesión, por favor revise su Correo Electronico y su Contraseña."
        );
      });
  };

  //Login Sociales
  //verificamos si existe un redirect anterior
  const getRedirect = useGetRedirectResult();
  useEffect(() => {
    getRedirect();
  }, []);

  //login with google
  const loginWithGoogle = useSignInWithGoogle();

  const handleLoginWithGoogle = () => {
    loginWithGoogle();
  };

  //Login with facebook
  const loginWithFacebook = useSignInWithFacebook();

  const handleLoginWithFacebook = () => {
    loginWithFacebook();
  };

  return (
    <div>
      <Typography
        className={classes.title}
        variant="h4"
        color="secondary"
        align="center"
      >
        Iniciar Sesión
      </Typography>

      <form onSubmit={handleSubmitLogin}>
        <TextField
          className={classes.marginElements}
          label="Correo"
          fullWidth
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextFieldPassword
          label="Contraseña"
          fullWidth
          variant="outlined"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          size="large"
          fullWidth
          className={classes.marginMini}
        >
          Iniciar Sesión
        </Button>
      </form>
      <div className={classes.marginBlocks}>
        <Link>Olvide mi contraseña</Link>
      </div>
      <Button
        classes={{ root: classes.rootButtonGoogle }}
        variant="contained"
        size="large"
        fullWidth
        startIcon={<GoogleIcon />}
        className={classes.marginElements}
        onClick={() => {
          handleLoginWithGoogle();
        }}
      >
        Acceder con Google
      </Button>
      <Button
        classes={{ root: classes.rootButtonFacebook }}
        variant="contained"
        size="large"
        fullWidth
        startIcon={<FacebookIcon />}
        onClick={() => {
          handleLoginWithFacebook();
        }}
      >
        Acceder con Facebook
      </Button>
    </div>
  );
}

export default Login;

const useStyles = makeStyles((theme) => ({
  rootButtonGoogle: {
    color: theme.palette.getContrastText(theme.palette.google.main),
    backgroundColor: theme.palette.google.main,
    "&:hover": {
      backgroundColor: theme.palette.google.main
    }
  },
  rootButtonFacebook: {
    color: theme.palette.getContrastText(theme.palette.facebook.main),
    backgroundColor: theme.palette.facebook.main,
    "&:hover": {
      backgroundColor: theme.palette.facebook.main
    }
  },
  title: {
    margin: theme.spacing(4, 0)
  },
  marginElements: {
    marginBottom: theme.spacing(1)
  },
  marginBlocks: {
    marginBottom: theme.spacing(5)
  },
  marginMini: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  }
}));
