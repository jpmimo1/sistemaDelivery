const { useContext } = require("react");
const { default: ContextGlobalReducer } = require("../context");

const useOpenFullPageLoading = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  return () => globalDispatch({ type: "OPEN_FULL_PAGE_LOADING" });
};

const useCloseFullPageLoading = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  return () => globalDispatch({ type: "CLOSE_FULL_PAGE_LOADING" });
};

export { useCloseFullPageLoading, useOpenFullPageLoading };
