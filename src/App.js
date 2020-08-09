import React, { useContext, useEffect, useRef } from "react";
import UpBar from "./header/upBar";
import { Route, Switch } from "react-router-dom";
import Content from "./content";
import Footer from "./footer/footer";
import { paths } from "./globals/constants";
import DialogAuth from "./auth/dialogAuth";
import { useShowContentModalAuth } from "./globals/showContent";
import VerifyEmail from "./verify/verifyEmail";
import DialogVerifyEmail from "./auth/dialogVerifyEmail";
import FirebaseContext from "./firebase/context";
import { useUpdateUser } from "./globals/globalReducer/actions";
import FullPageLoading from "./globals/components/fullPageLoading";
import UserRequiredRegisterBussiness from "./registerBusiness/modals/userRequiredRegisterBussiness";
import RouteLogin from "./routes/routeLogin";
import RegisterBusiness from "./registerBusiness/registerBusiness";

const { root, auth, login, register, verifynEmail, registerBusiness } = paths;

function App() {
  /*usamos estas variables para mostrar y ocultar los elemenos cuando activamos el modal
  de Autentification
  */
  const showContentModalAuth = useShowContentModalAuth();
  const ActualUpBar = UpBar,
    ActualFooter = Footer;

  /*Variables para actualizar el usuario actual */
  const updateUser = useUpdateUser();
  const firebase = useContext(FirebaseContext);
  /*sirve para dessuscribirnos al ultimo agente de escucha al realizar el unmount del 
  documento los demas agentes se desuscriben al realizar un dispatch en el snapShotUserReducer*/
  const unsuscribeAuthChanged = useRef();
  const unsuscribeUserChanged = useRef();
  useEffect(() => {
    unsuscribeAuthChanged.current = firebase.auth.onAuthStateChanged(() => {
      unsuscribeUserChanged.current = updateUser();
    });
    return () => {
      unsuscribeAuthChanged.current();
      unsuscribeUserChanged.current && unsuscribeUserChanged.current();
    };
  }, []);

  return (
    <>
      {showContentModalAuth ? (
        <>
          <Switch>
            <Route
              exact
              path={[root, auth, login, register]}
              render={(routeProps) => (
                <>
                  <ActualUpBar />
                  <Content {...routeProps} />
                  <ActualFooter />
                </>
              )}
            />
            <Route path="/jeanpaul">
              <div>Jean Paul</div>
            </Route>
            <RouteLogin path={registerBusiness}>
              <RegisterBusiness />
            </RouteLogin>
            <Route path={verifynEmail} component={VerifyEmail} />
          </Switch>
        </>
      ) : null}
      <DialogAuth />
      <DialogVerifyEmail />
      <FullPageLoading />
      <UserRequiredRegisterBussiness />
    </>
  );
}

export default App;
