import dialogVerifyEmailReducer, {
  initialState as dialogVerifyEmailInitialState
} from "./reducers/dialogVerityEmailReducer";
import userReducer, {
  initialState as userInitialState
} from "./reducers/userReducer";
import fullPageLoadingReducer, {
  initialState as fullPageLoadingInitialState
} from "./reducers/fullPageLoadingReducer";
import snapShotUserReducer, {
  initialState as snapShotUserInitialState
} from "./reducers/snapShotUserReducer";
import dialogUserRequiredRegisterBusinessReducer, {
  initialState as dialogUserRequiredRegisterBusinessInitialState
} from "./reducers/dialogUserRequiredRegisterBusinessReducer";

/*Creacion de los objectos initialState y reducers*/
const generalInitialState = {
  ...dialogVerifyEmailInitialState,
  ...userInitialState,
  ...fullPageLoadingInitialState,
  ...snapShotUserInitialState,
  ...dialogUserRequiredRegisterBusinessInitialState
};
const objectReducers = {
  dialogVerifyEmail: dialogVerifyEmailReducer,
  user: userReducer,
  fullPageLoading: fullPageLoadingReducer,
  snapShotUser: snapShotUserReducer,
  dialogUserRequiredRegisterBusiness: dialogUserRequiredRegisterBusinessReducer
};

/*Juntamos todos los reducer recorriendo el arreglo y concatenado con las key respectivas */
const generalReducer = (state, action) => {
  const arrayKeys = Object.keys(generalInitialState);

  return arrayKeys.reduce(
    (previous, current) => ({
      ...previous,
      [current]: objectReducers[current](previous[current], action)
    }),
    state
  );
};

export { generalReducer, generalInitialState };
