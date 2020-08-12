import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //main App
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme/theme";
import { BrowserRouter as Router } from "react-router-dom";
//Firebase
import Firebase, { FirebaseContext } from "./firebase";
import { ContextGlobalReducerProvider } from "./globals/globalReducer/context";
//Global reducer
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SnackbarProvider>
      <FirebaseContext.Provider value={new Firebase()}>
        <ContextGlobalReducerProvider>
          <Router>
            <App />
          </Router>
        </ContextGlobalReducerProvider>
      </FirebaseContext.Provider>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
