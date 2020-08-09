import ContextGlobalReducer from "../context";
import { useContext, useEffect } from "react";

const useOpenDialogVerifyEmail = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  return () => globalDispatch({ type: "OPEN_DIALOG_VERIFY_EMAIL" });
};

const useCloseDialogVerifyEmail = () => {
  const [, globalDispatch] = useContext(ContextGlobalReducer);
  return () => globalDispatch({ type: "CLOSE_DIALOG_VERIFY_EMAIL" });
};

/**
 * controla las acciones que ocurren cuando el dialog se abre o se cierra
 * si se quiere controlar la apertura el object será {type:"onOpen",action:function}
 * si se quiere controlar el cierre el object será {type:"onClose",action:function}
 * @param {*} param0
 */
const useDialogVerifyController = ({ type, action }) => {
  const [{ dialogVerifyEmail }] = useContext(ContextGlobalReducer);
  useEffect(() => {
    if (type === "onOpen" && dialogVerifyEmail) {
      action();
    } else if (type === "onClose" && !dialogVerifyEmail) {
      action();
    }
  }, [dialogVerifyEmail, type, action]);
};

export {
  useOpenDialogVerifyEmail,
  useCloseDialogVerifyEmail,
  useDialogVerifyController
};
