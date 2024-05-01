import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  makeStyles
} from "@material-ui/core";
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import AvatarMenuDrawer from "./avatarMenuDrawer";
import { useLogOutUser } from "../globals/globalReducer/actions";

function MenuDrawerList() {
  const classes = useStyles();
  const logOut = useLogOutUser();

  return (
    <div className={classes.listStyles}>
      <AvatarMenuDrawer />
      <Divider />
      <List>
        <ListItem button onClick={() => logOut()}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar Sesión" />
        </ListItem>
      </List>
    </div>
  );
}

export default MenuDrawerList;

const useStyles = makeStyles((theme) => ({
  listStyles: {
    width: theme.spacing(30)
  }
}));
