const { useContext } = require("react");
const { default: ContextGlobalReducer } = require("../context");

const useOpenDialogUserRequiredRegisterBusiness = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  return () =>
    globalDispatch({ type: "OPEN_DIALOG_USER_REQUIRED_REGISTER_BUSINESS" });
};

const useCloseDialogUserRequiredRegisterBusiness = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  return () =>
    globalDispatch({ type: "CLOSE_DIALOG_USER_REQUIRED_REGISTER_BUSINESS" });
};

export {
  useOpenDialogUserRequiredRegisterBusiness,
  useCloseDialogUserRequiredRegisterBusiness
};
