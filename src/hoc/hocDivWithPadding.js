import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0),
      marginTop: theme.spacing(6)
    }
  }
}));

const HocDivWithPadding = (WrappedComponent) => {
  return function DivComponent(props) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default HocDivWithPadding;
