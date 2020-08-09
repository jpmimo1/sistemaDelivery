import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import MainBanner from "./content/mainBanner";
import Categories from "./content/categories/categories";
import Suggestions from "./content/suggestions/suggestions";
import Availables from "./content/availables/availables";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100%",
      display: "flex"
    }
  };
});

function Content(props) {
  const classes = useStyles();

  /*Prueba para ver al usuario actual
  const firebase = useContext(FirebaseContext);

  firebase.auth.onAuthStateChanged(function (user) {
    if (user) {
      let name, email, photoUrl, emailVerified, uid;
      console.log(user.emailVerified);
      if (user != null) {
        console.log(user);
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
      }
      console.log(name, email, photoUrl, emailVerified, uid);
    } else {
      console.log("no hay usuario");
    }
  });*/

  return (
    <>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8}>
            <MainBanner />
            <Categories />
            <Suggestions />
            <Availables />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Content;
