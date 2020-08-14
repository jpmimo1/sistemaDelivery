import React, { useEffect } from "react";
import { makeStyles, Typography, AppBar } from "@material-ui/core";

import Steps from "./steps";
import NavigatorSteps from "./navigatorSteps/navigatorSteps";
import useGlobalStepsHandler from "./globalStepsHandler";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: theme.spacing(7)
  },
  divSpacing: {
    height: theme.spacing(7)
  }
}));

function RegisterBusiness() {
  const classes = useStyles();

  const globalStepsHandler = useGlobalStepsHandler();
  const stepsNavigator = globalStepsHandler.getStepsNavigator();

  useEffect(() => {
    document.body.style.overscrollBehavior = "contain";
    return () => (document.body.style.overscrollBehavior = null);
  }, []);

  return (
    <>
      <AppBar className={classes.paper} square color="primary">
        <Typography variant="button">
          {stepsNavigator.getData()["title"]}
        </Typography>
      </AppBar>
      <div className={classes.divSpacing}/>
      <Steps globalStepsHandler={globalStepsHandler} />
      <NavigatorSteps globalStepsHandler={globalStepsHandler} />
    </>
  );
}

export default RegisterBusiness;
