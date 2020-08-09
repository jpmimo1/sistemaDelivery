import React from "react";
import { makeStyles } from "@material-ui/core";
import SecondStep from "./secondStep";
import FirstStep from "./firstStep";
import ThirdStep from "./thirdStep";
import FourthStep from "./fourthStep";
import FifthStep from "./fifStep/fifthStep";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(7)
  }
}));

function Steps({ index }) {
  const classes = useStyles();
  const steps = [
    <FifthStep />,
    <FourthStep />,
    <ThirdStep />,
    <SecondStep />,
    <FirstStep />
  ];
  return <div className={classes.root}>{steps[index]}</div>;
}

export default Steps;
