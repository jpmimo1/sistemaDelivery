import useStepsNavigator from "./stepsNavigatorHandler";
import useDataRegisterBusiness from "./dataHandler/actions";
import useFirstStepData from "./firstStep/firstStepDataHandler";
import useSecondStepData from "./secondStep/secondStepDataHanldler";
import useThirdStepData from "./thirdStep/thirdStepDataHandler";
import useSnackbarHandler from "../snackBarHandler/snackBarHandler";

class GlobalStepsHandler {
  constructor(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    thirdStepData,
    snackBarHandler
  ) {
    this.stepsNavigator = stepsNavigator;
    this.dataRegisterBusiness = dataRegisterBusiness;
    this.firstStepData = firstStepData;
    this.secondStepData = secondStepData;
    this.thirdStepData = thirdStepData;
    this.snackBarHandler = snackBarHandler;
  }

  getStepsNavigator = () => {
    return this.stepsNavigator;
  };

  tryFirstStepDataNext = () => {
    this.stepsNavigator.next();
  };

  getSecondStepData = () => {
    return this.secondStepData;
  };

  getThirdStepData = () => {
    return this.thirdStepData;
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

  tryThirdStepDataNext = async () => {
    const locationData = await this.dataRegisterBusiness.setLocation({
      location: this.thirdStepData.values
    });

    if (locationData.errors) {
      this.snackBarHandler.sendFromYupErrors(locationData.errors);
    } else {
      this.stepsNavigator.next();
    }
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
      case 2: {
        await this.tryThirdStepDataNext();
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
  const thirdStepData = useThirdStepData();
  const snackBarHandler = useSnackbarHandler();
  return new GlobalStepsHandler(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    thirdStepData,
    snackBarHandler
  );
};

export default useGlobalStepsHandler;
