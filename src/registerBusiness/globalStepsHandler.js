import useStepsNavigator from "./stepsNavigatorHandler";
import useDataRegisterBusiness from "./dataHandler/actions";
import useFirstStepData from "./firstStep/firstStepDataHandler";
import useSecondStepData from "./secondStep/secondStepDataHanldler";
import useThirdStepData from "./thirdStep/thirdStepDataHandler";
import useFourthStepData from "./fouthStep/fourthStepDataHandler";
import useFifthStepData from "./fifStep/fifthStepDataHandler";
import useSixthStepData from "./sixthStep/sixthStepDataHandler";
import useSnackbarHandler from "../snackBarHandler/snackBarHandler";

class GlobalStepsHandler {
  constructor(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    thirdStepData,
    fourthStepData,
    fifthStepData,
    sixthStepData,
    snackBarHandler
  ) {
    this.stepsNavigator = stepsNavigator;
    this.dataRegisterBusiness = dataRegisterBusiness;
    this.firstStepData = firstStepData;
    this.secondStepData = secondStepData;
    this.thirdStepData = thirdStepData;
    this.fourthStepData = fourthStepData;
    this.fifthStepData = fifthStepData;
    this.sixthStepData = sixthStepData;
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

  //Fifth Step Actions
  getFifthStepData = () => {
    return this.fifthStepData;
  };
  tryFifthStepDataNext = async () => {
    const menuData = await this.dataRegisterBusiness.setMenu({
      menu: this.fifthStepData.data
    });

    if (menuData.errors) {
      this.snackBarHandler.sendFromYupErrors(menuData.errors);
    } else {
      this.stepsNavigator.next();
    }
  };

  //Sixth Step Actions
  getSixthStepData = () => {
    return this.sixthStepData;
  };
  trySixthStepDataNext = async () => {
    const photosData = await this.dataRegisterBusiness.setPhotos({
      photos: this.sixthStepData.data
    });

    if (photosData.errors) {
      this.snackBarHandler.sendFromYupErrors(photosData.errors);
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
      case 4: {
        await this.tryFifthStepDataNext();
        break;
      }
      case 5: {
        await this.trySixthStepDataNext();
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
  const fifthStepData = useFifthStepData();
  const sixthStepData = useSixthStepData();
  const snackBarHandler = useSnackbarHandler();
  return new GlobalStepsHandler(
    stepsNavigator,
    dataRegisterBusiness,
    firstStepData,
    secondStepData,
    thirdStepData,
    fourthStepData,
    fifthStepData,
    sixthStepData,
    snackBarHandler
  );
};

export default useGlobalStepsHandler;
