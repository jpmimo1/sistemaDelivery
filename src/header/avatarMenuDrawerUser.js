import React from "react";
import {
  CardActionArea,
  Avatar,
  Typography,
  makeStyles
} from "@material-ui/core";

function AvatarMenuDrawerUser({
  name,
  profileColor,
  displayName,
  photoURL,
  ...otherprops
}) {
  const useStyles = makeStyles((theme) => ({
    avatar: { backgroundColor: profileColor, marginRight: theme.spacing(2) },
    paperUser: {
      ...theme.mixins.toolbar,
      padding: theme.spacing(0, 2),
      display: "flex",
      alignItems: "center"
    }
  }));
  const classes = useStyles();

  let letra = "";
  if (name) {
    letra = name[0].toUpperCase();
  }

  return (
    <CardActionArea
      onClick={() => {
        console.log("necesitamos hacer el redireccionamiendo al perfil");
      }}
    >
      <div className={classes.paperUser}>
        <Avatar
          className={classes.avatar}
          alt={name && name !== "" ? name : displayName}
          src={photoURL && photoURL !== "" ? photoURL : ""}
        >
          {letra}
        </Avatar>
        <Typography variant="body1">{name && name !== "" ? name : displayName}</Typography>
      </div>
    </CardActionArea>
  );
}

export default AvatarMenuDrawerUser;
