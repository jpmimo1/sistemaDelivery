import { useHistory, useLocation } from "react-router-dom";
import { paths } from "../globals/constants";

/*Los dos puntos son para asignar un nuevo nombre a la desestructuracion del Object paths
los nombres originales de las keys del Object son login y register */

const {
  login: loginPath,
  register: registerPath,
  registerBusiness: registerBusinessPath
} = paths;

const useActualPath = () => {
  const location = useLocation();
  return location.pathname;
};

const useRedirectTo = (path = "/") => {
  const history = useHistory();
  return () => {
    history.push(path);
  };
};

const useRedirectToLogin = () => {
  const redirectToLogin = useRedirectTo(loginPath);
  return () => {
    redirectToLogin();
  };
};

const useRedirectToRegister = () => {
  const redirectToRegister = useRedirectTo(registerPath);
  return () => {
    redirectToRegister();
  };
};

const useRedirectToRegisterBusiness = () => {
  const redirectToRegisterBusiness = useRedirectTo(registerBusinessPath);
  return () => {
    redirectToRegisterBusiness();
  };
};

export {
  useRedirectTo,
  useActualPath,
  useRedirectToLogin,
  useRedirectToRegister,
  useRedirectToRegisterBusiness
};
