import React from "react";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative"
  },
  progress: {
    position: "absolute",
    top: "50%",
    left: "50%"
  }
}));

/**
 *
 * @param {*} props todos los props de Button y ademas
 * sizeProgress, colorProgress y loading
 */

function ButtonLoading(props) {
  const classes = useStyles();
  const { loading, sizeProgress, colorProgress, ...propsButton } = props;
  return (
    <div className={classes.root}>
      <Button {...propsButton} disabled={props.loading}>
        {props.children}
      </Button>
      {props.loading && (
        <CircularProgress
          className={classes.progress}
          size={props.sizeProgress}
          color={props.colorProgress}
          style={{
            marginTop: (props.sizeProgress / 2) * -1,
            marginLeft: (props.sizeProgress / 2) * -1
          }}
        />
      )}
    </div>
  );
}

export default ButtonLoading;
