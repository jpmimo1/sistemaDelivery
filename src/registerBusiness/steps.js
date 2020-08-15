import React from "react";
import { makeStyles } from "@material-ui/core";
import FirstStep from "./firstStep/firstStep";
import SecondStep from "./secondStep/secondStep";
import FourthStep from "./fouthStep/fourthStep";
import ThirdStep from "./thirdStep/thirdStep";
import FifthStep from "./fifStep/fifthStep";
import SixthStep from "./sixthStep/sixthStep";
import SeventhStep from "./seventhStep/seventhStep";
import EighthStep from "./eighthStep/eighthStep";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(7)
  }
}));

function Steps({ globalStepsHandler }) {
  const classes = useStyles();
  /* const steps = [
    <EighthStep />,
    <SeventhStep />,
    <SixthStep />,
    <FifthStep />,
    <FourthStep />,
    <ThirdStep />,
    <SecondStep />,
    <FirstStep />
  ]; */
  const steps = [
    <FirstStep />,
    <SecondStep dataHandler={globalStepsHandler.getSecondStepData()} />,
    <ThirdStep dataHandler={globalStepsHandler.getThirdStepData()} />,
    <FourthStep dataHandler={globalStepsHandler.getFourthStepData()} />,
    <FifthStep />,
    <SixthStep />,
    <SeventhStep />,
    <EighthStep />
  ];
  return (
    <div className={classes.root}>
      {steps[globalStepsHandler.getStepsNavigator().getIndex()]}
    </div>
  );
}

export default Steps;
