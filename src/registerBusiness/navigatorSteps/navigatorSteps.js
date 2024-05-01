import React from "react";
import { MobileStepper, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

function NavigatorSteps({ globalStepsHandler }) {
  const stepsNavigator = globalStepsHandler.getStepsNavigator();
  const index = stepsNavigator.getIndex();
  const last = stepsNavigator.isLast();
  const first = stepsNavigator.isFirst();
  const total = stepsNavigator.getTotal();

  return (
    <MobileStepper
      variant="progress"
      elevation={2}
      steps={total}
      position="bottom"
      activeStep={index}
      nextButton={
        <Button
          onClick={() => {
            globalStepsHandler.nextStep();
          }}
          endIcon={<KeyboardArrowRight />}
          size="large"
        >
          {last ? "Finalizar" : "Siguiente"}
        </Button>
      }
      backButton={
        <Button
          onClick={() => {
            stepsNavigator.back();
          }}
          startIcon={<KeyboardArrowLeft />}
          size="large"
        >
          {first ? "Salir" : "Atras"}
        </Button>
      }
    />
  );
}

export default NavigatorSteps;
