import React, { useReducer, useEffect } from "react";
import {
  makeStyles,
  Typography,
  MobileStepper,
  Button,
  AppBar
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import Steps from "./steps";

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

const stepsData = [
  { title: "Inicio" },
  { title: "Datos Iniciales" },
  { title: "Ubicación" },
  { title: "Categoria" },
  { title: "Carta" }
];
const stepActualInicialState = {
  index: 0,
  inicio: true,
  fin: false,
  data: stepsData[0],
  total: stepsData.length
};
const stepsReducer = (state, action) => {
  const { index, inicio, fin } = state;
  const lenght = stepsData.length;
  let nowFin = false,
    nowInicio = false;
  switch (action.type) {
    case "NEXT":
      if (fin) {
        return state;
      } else {
        if (lenght - 1 === index + 1) {
          nowFin = true;
        } else nowFin = false;
        return {
          ...state,
          index: index + 1,
          inicio: false,
          fin: nowFin,
          data: stepsData[index + 1]
        };
      }
    case "BACK":
      if (inicio) {
        return state;
      } else {
        if (index - 1 === 0) {
          nowInicio = true;
        } else nowInicio = false;
        return {
          ...state,
          index: index - 1,
          inicio: nowInicio,
          fin: false,
          data: stepsData[index - 1]
        };
      }
    default:
      return state;
  }
};

function RegisterBusiness() {
  const classes = useStyles();
  const [{ index, inicio, fin, data, total }, dispatchStepActual] = useReducer(
    stepsReducer,
    stepActualInicialState
  );

  useEffect(() => {
    document.body.style.overscrollBehavior = "contain";
    return () => (document.body.style.overscrollBehavior = null);
  }, []);

  return (
    <>
      <AppBar className={classes.paper} square color="primary">
        <Typography variant="button">{data["title"]}</Typography>
      </AppBar>
      <div className={classes.divSpacing}></div>
      <Steps index={index} />
      <MobileStepper
        variant="progress"
        elevation={2}
        steps={total}
        position="bottom"
        activeStep={index}
        nextButton={
          <Button
            onClick={() => {
              dispatchStepActual({ type: "NEXT" });
            }}
            endIcon={<KeyboardArrowRight />}
            size="large"
          >
            {fin ? "Finalizar" : "Siguiente"}
          </Button>
        }
        backButton={
          <Button
            onClick={() => {
              dispatchStepActual({ type: "BACK" });
            }}
            startIcon={<KeyboardArrowLeft />}
            size="large"
          >
            {inicio ? "Salir" : "Atras"}
          </Button>
        }
      />
    </>
  );
}

export default RegisterBusiness;
