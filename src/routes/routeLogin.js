import React, { useContext, useEffect, useRef, useReducer } from "react";
import { Route, Redirect } from "react-router-dom";
import { paths } from "../globals/constants";
import { FirebaseContext } from "../firebase";
import {
  useOpenFullPageLoading,
  useCloseFullPageLoading
} from "../globals/globalReducer/actions/fullPageLoadingActions";

const initialState = { user: null, waiting: true };

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { user: action.user, waiting: false };
    default:
      return state;
  }
}

function RouteLogin({ children, ...props }) {
  const openLoading = useOpenFullPageLoading(),
    closeLoading = useCloseFullPageLoading();
  const { login } = paths;
  const firebase = useContext(FirebaseContext);
  const [{ user, waiting }, dispatch] = useReducer(reducer, initialState);

  const unsuscribeAuthChanged = useRef();
  useEffect(() => {
    openLoading();
    unsuscribeAuthChanged.current = firebase.auth.onAuthStateChanged(() => {
      const fuser = firebase.auth.currentUser;
      closeLoading();
      dispatch({ type: "SET_USER", user: fuser });
    });
    return () => {
      unsuscribeAuthChanged.current();
    };
  }, []);

  return waiting ? null : user ? (
    <Route {...props}>{children}</Route>
  ) : (
    <Redirect to={login} />
  );
}

export default RouteLogin;
