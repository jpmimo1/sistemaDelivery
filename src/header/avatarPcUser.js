import React, { useState } from "react";
import {
  Avatar,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  People as IconPeople,
  ExitToApp as IconExitToApp
} from "@material-ui/icons";
import { useLogOutUser } from "../globals/globalReducer/actions";

function AvatarPcUser({
  name,
  profileColor,
  photoURL,
  displayName,
  ...otherprops
}) {
  const useStyles = makeStyles((theme) => ({
    avatar: { backgroundColor: profileColor }
  }));
  const classes = useStyles();

  let letra = "";
  if (name) {
    letra = name[0].toUpperCase();
  }

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = useLogOutUser();

  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        <Avatar
          className={classes.avatar}
          alt={name && name !== "" ? name : displayName}
          src={photoURL && photoURL !== "" ? photoURL : ""}
        >
          {letra}
        </Avatar>
      </IconButton>
      <Menu
        id="menu-user-login"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <MenuItem
          onClick={() => {
            console.log("redirigir al perfil del usuario");
          }}
        >
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary="Ver Perfil" />
        </MenuItem>
        <MenuItem
          onClick={() => {
            logOut();
          }}
        >
          <ListItemIcon>
            <IconExitToApp />
          </ListItemIcon>
          <ListItemText primary="Cerra Sesión" />
        </MenuItem>
      </Menu>
    </>
  );
}

export default AvatarPcUser;
