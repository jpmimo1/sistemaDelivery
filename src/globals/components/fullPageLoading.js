import React, { useContext } from "react";
import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";
import ContextGlobalReducer from "../globalReducer/context";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.tooltip + 1,
    color: theme.palette.secondary.light
  }
}));

function FullPageLoading() {
  const classes = useStyles();
  const [{ fullPageLoading: openLoading }] = useContext(ContextGlobalReducer);

  return (
    <Backdrop open={openLoading} className={classes.backdrop}>
      <CircularProgress size={50} color="inherit" />
    </Backdrop>
  );
}

export default FullPageLoading;
