import { breakpointsReturns } from "../theme/theme";
import { paths } from "./constants";
import { useActualPath } from "./redirects";

const { login: pathLogin, register: pathRegister } = paths;

const useShowContentModalAuth = () => {
  const showContentWithModal = breakpointsReturns({
    xs: false,
    sm: false,
    md: true,
    lg: true,
    xl: true
  });

  const pathActual = useActualPath();
  const modalActive = pathActual === pathLogin || pathActual === pathRegister;
  return showContentWithModal || !modalActive;
};

export { useShowContentModalAuth };
