import React, { useReducer, createContext } from "react";
import { generalReducer, generalInitialState } from "./reducer";

const ContextGlobalReducer = createContext(null);
ContextGlobalReducer.displayName = "ContextGlobalReducer";

const ContextGlobalReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, generalInitialState);

  return (
    <ContextGlobalReducer.Provider value={[state, dispatch]}>
      {children}
    </ContextGlobalReducer.Provider>
  );
};

export default ContextGlobalReducer;
export { ContextGlobalReducerProvider };
