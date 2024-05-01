import React, { useContext } from "react";
import { Card } from "@material-ui/core";
import AvatarManuDrawerLogOut from "./avatarManuDrawerLogOut";
import ContextGlobalReducer from "../globals/globalReducer/context";
import AvatarMenuDrawerUser from "./avatarMenuDrawerUser";

function AvatarMenuDrawer() {
  const [{ user }] = useContext(ContextGlobalReducer);
  return (
    <Card elevation={0}>
      {user ? <AvatarMenuDrawerUser {...user} /> : <AvatarManuDrawerLogOut />}
    </Card>
  );
}

export default AvatarMenuDrawer;
