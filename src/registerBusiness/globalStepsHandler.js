import useStepsNavigator from "./stepsNavigatorHandler";
import useDataRegisterBusiness from "./dataHandler/actions";
import useFirstStepData from "./firstStep/firstStepDataHandler";
import useSecondStepData from "./secondStep/secondStepDataHanldler";
import useThirdStepData from "./thirdStep/thirdStepDataHandler";
import useSnackbarHandler from "../snackBarHandler/snackBarHandler";
import useFourthStepData from "./fouthStep/fourthStepDataHandler";

class GlobalStepsHandler {
  constructor(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    thirdStepData,
    fourthStepData,
    snackBarHandler
  ) {
    this.stepsNavigator = stepsNavigator;
    this.dataRegisterBusiness = dataRegisterBusiness;
    this.firstStepData = firstStepData;
    this.secondStepData = secondStepData;
    this.thirdStepData = thirdStepData;
    this.fourthStepData = fourthStepData;
    this.snackBarHandler = snackBarHandler;
  }

  getStepsNavigator = () => {
    return this.stepsNavigator;
  };

  //First Step Actions
  tryFirstStepDataNext = () => {
    this.stepsNavigator.next();
  };

  //Second Step Actions
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

  //Third Step Actions
  getThirdStepData = () => {
    return this.thirdStepData;
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

  //Fourth Step Actions
  getFourthStepData = () => {
    return this.fourthStepData;
  };

  tryFourthStepDataNext = async () => {
    const categoriesData = await this.dataRegisterBusiness.setCategories({
      categories: this.fourthStepData.data
    });

    if (categoriesData.errors) {
      this.snackBarHandler.sendFromYupErrors(categoriesData.errors);
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
      case 3: {
        await this.tryFourthStepDataNext();
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
  const fourthStepData = useFourthStepData();
  const snackBarHandler = useSnackbarHandler();
  return new GlobalStepsHandler(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    thirdStepData,
    fourthStepData,
    snackBarHandler
  );
};

export default useGlobalStepsHandler;
