import React, { useContext } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Button
} from "@material-ui/core";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon
} from "@material-ui/icons";
import { useOpenDialogUserRequiredRegisterBusiness } from "../globals/globalReducer/actions";
import ContextGlobalReducer from "../globals/globalReducer/context";
import { useRedirectToRegisterBusiness } from "../globals/redirects";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(2, 0)
    }
  },
  gridItemFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(1)
  }
}));

function ContentFooter() {
  const classes = useStyles();
  const openUserRequiredRegisterBusiness = useOpenDialogUserRequiredRegisterBusiness();
  const [{ user }] = useContext(ContextGlobalReducer);
  const redirectToRegisterBusiness = useRedirectToRegisterBusiness();

  const handlerButtonRegisterBusiness = () => {
    user ? redirectToRegisterBusiness() : openUserRequiredRegisterBusiness();
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.gridItemFooter}>
          <Typography color="inherit">
            Quieres conocernos visitanos en
          </Typography>
          <div>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <YouTubeIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItemFooter}>
          <Typography color="inherit">Tienes un negocio registrate</Typography>
          <Button
            color="inherit"
            variant="outlined"
            onClick={handlerButtonRegisterBusiness}
          >
            Aquí
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContentFooter;
