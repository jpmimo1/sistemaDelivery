import React from "react";
import { Avatar, IconButton, Tooltip } from "@material-ui/core";
import { Person as PersonIcon } from "@material-ui/icons";
import { useRedirectToLogin } from "../globals/redirects";


function AvatarPcLogOut() {
  
  const redirectToLogin = useRedirectToLogin();
  return (
    <Tooltip title="Iniciar Sesión">
      <IconButton
        component="button"
        size="small"
        onClick={() => {
          redirectToLogin();
        }}
      >
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>
    </Tooltip>
  );
}

export default AvatarPcLogOut;
