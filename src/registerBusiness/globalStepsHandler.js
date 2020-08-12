import useStepsNavigator from "./stepsNavigatorHandler";
import useDataRegisterBusiness from "./dataHandler/actions";
import useFirstStepData from "./firstStep/firstStepDataHandler";
import useSecondStepData from "./secondStep/secondStepDataHanldler";
import useSnackbarHandler from "../snackBarHandler/snackBarHandler";

class GlobalStepsHandler {
  constructor(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    snackBarHandler
  ) {
    this.stepsNavigator = stepsNavigator;
    this.dataRegisterBusiness = dataRegisterBusiness;
    this.firstStepData = firstStepData;
    this.secondStepData = secondStepData;
    this.snackBarHandler = snackBarHandler;
  }

  getStepsNavigator = () => {
    return this.stepsNavigator;
  };

  getSecondStepData = () => {
    return this.secondStepData;
  };

  trySecondStepDataNext = async () => {
    const initialData = await this.dataRegisterBusiness.setInitialData({
      initialData: this.secondStepData.values
    });

    if (initialData.errors) {
      this.snackBarHandler.sendFromYupErrors(initialData.errors);
    } else {
      this.stepsNavigator.next();
    }
  };
  tryFirstStepDataNext = () => {
    this.stepsNavigator.next();
  };

  nextStep = async () => {
    switch (this.stepsNavigator.getIndex()) {
      case 0: {
        this.tryFirstStepDataNext();
        break;
      }
      case 1: {
        await this.trySecondStepDataNext();
        break;
      }
      default:
    }
  };
}

const useGlobalStepsHandler = () => {
  const stepsNavigator = useStepsNavigator();
  const dataRegisterBusiness = useDataRegisterBusiness();
  const firstStepData = useFirstStepData();
  const secondStepData = useSecondStepData();
  const snackBarHandler = useSnackbarHandler();
  return new GlobalStepsHandler(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    snackBarHandler
  );
};

export default useGlobalStepsHandler;
