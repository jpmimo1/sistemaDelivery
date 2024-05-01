import React, { useContext } from "react";
import { Hidden, makeStyles } from "@material-ui/core";
import ContextGlobalReducer from "../globals/globalReducer/context";
import AvatarPcUser from "./avatarPcUser";
import AvatarPcLogOut from "./avatarPcLogOut";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2)
  }
}));

function AvatarPc() {
  const classes = useStyles();
  const [{ user }] = useContext(ContextGlobalReducer);

  return (
    <Hidden smDown>
      <div className={classes.root}>
        {user ? <AvatarPcUser {...user} /> : <AvatarPcLogOut {...user} />}
      </div>
    </Hidden>
  );
}

export default AvatarPc;
