import React from "react";
import {
  CardActionArea,
  Avatar,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Person as PersonIcon } from "@material-ui/icons";
import { useRedirectToLogin } from "../globals/redirects";

function AvatarManuDrawerLogOut() {
  const classes = useStyles();
  const redirectToLogin = useRedirectToLogin();
  
  return (
    <CardActionArea
      onClick={() => {
        redirectToLogin();
      }}
    >
      <div className={classes.paperUser}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography variant="body1">Iniciar Sesión</Typography>
      </div>
    </CardActionArea>
  );
}

export default AvatarManuDrawerLogOut;

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginRight: theme.spacing(2)
  },
  paperUser: {
    ...theme.mixins.toolbar,
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center"
  }
}));
