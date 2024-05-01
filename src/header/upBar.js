import React, { useState } from "react";
import { AppBar, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import MainToolBar from "./mainToolBar";
import MenuDrawer from "./menuDrawer";

const useStyles = makeStyles((theme) => ({
  headerHeight: theme.mixins.toolbar
}));

function UpBar() {
  const classes = useStyles();
  const [draweState, setDrawerState] = useState(false);

  const toogleDrawerState = (state) => {
    setDrawerState(state);
  };

  return (
    <>
      <AppBar position="fixed">
        <MainToolBar onOpen={() => toogleDrawerState(true)} />
      </AppBar>
      <div className={classes.headerHeight}></div>
      <MenuDrawer
        open={draweState}
        onClose={() => toogleDrawerState(false)}
        onOpen={() => toogleDrawerState(true)}
      />
    </>
  );
}

export default withRouter(UpBar);
