import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import MenuDrawerList from "./menuDrawerList";

function MenuDrawer({ open, onClose, onOpen }) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <MenuDrawerList />
    </SwipeableDrawer>
  );
}

export default MenuDrawer;
