const { useReducer } = require("react");

const stepsData = [
  { title: "Inicio" },
  { title: "Datos Iniciales" },
  { title: "Ubicación" },
  { title: "Categoria" },
  { title: "Carta" },
  { title: "Fotos" },
  { title: "Resumen" },
  { title: "Registro Completo" }
];
const stepActualInicialState = {
  index: 0,
  first: true,
  last: false,
  data: stepsData[0],
  total: stepsData.length
};
const stepsReducer = (state, action) => {
  const { index, first, last } = state;
  const lenght = stepsData.length;
  let nowFin = false,
    nowInicio = false;
  switch (action.type) {
    case "NEXT":
      if (last) {
        return state;
      } else {
        if (lenght - 1 === index + 1) {
          nowFin = true;
        } else nowFin = false;
        return {
          ...state,
          index: index + 1,
          first: false,
          last: nowFin,
          data: stepsData[index + 1]
        };
      }
    case "BACK":
      if (first) {
        return state;
      } else {
        if (index - 1 === 0) {
          nowInicio = true;
        } else nowInicio = false;
        return {
          ...state,
          index: index - 1,
          first: nowInicio,
          last: false,
          data: stepsData[index - 1]
        };
      }
    default:
      return state;
  }
};

class StepsNavigator {
  constructor(dataSteps, dispatchSteps) {
    this.dataSteps = dataSteps;
    this.dispatchSteps = dispatchSteps;
  }
  getIndex = () => {
    return this.dataSteps.index;
  };
  getData = () => {
    return this.dataSteps.data;
  };
  getTotal = () => {
    return this.dataSteps.total;
  };
  isFirst = () => {
    return this.dataSteps.first;
  };
  isLast = () => {
    return this.dataSteps.last;
  };

  next = () => {
    this.dispatchSteps({ type: "NEXT" });
  };
  back = () => {
    this.dispatchSteps({ type: "BACK" });
  };
}

const useStepsNavigator = () => {
  const [dataSteps, dispatchSteps] = useReducer(
    stepsReducer,
    stepActualInicialState
  );

  return new StepsNavigator(dataSteps, dispatchSteps);
};

export default useStepsNavigator;
