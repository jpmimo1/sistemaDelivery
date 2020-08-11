import React from "react";
import { makeStyles } from "@material-ui/core";
import SecondStep from "./secondStep";
import FirstStep from "./firstStep";
import ThirdStep from "./thirdStep/thirdStep";
import FifthStep from "./fifStep/fifthStep";
import SixthStep from "./sixthStep/sixthStep";
import FourthStep from "./fouthStep/fourthStep";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(7)
  }
}));

function Steps({ index }) {
  const classes = useStyles();
  const steps = [
    <SixthStep />,
    <FifthStep />,
    <FourthStep />,
    <ThirdStep />,
    <SecondStep />,
    <FirstStep />
  ];
  return <div className={classes.root}>{steps[index]}</div>;
}

export default Steps;
