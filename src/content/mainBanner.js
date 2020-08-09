import React from "react";
import { Card, CardActionArea, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      borderRadius: 0
    },
    [theme.breakpoints.up("sm")]: { marginTop: theme.spacing(2) },
    [theme.breakpoints.up("md")]: { marginTop: theme.spacing(3) }
  },
  media: {
    height: theme.spacing(20),
    [theme.breakpoints.up("sm")]: { height: theme.spacing(30) },
    [theme.breakpoints.up("md")]: { height: theme.spacing(40) }
  }
}));

function MainBanner() {
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.enlaradio.com.ar/noticias/wp-content/uploads/2020/05/comida-delivery.jpg"
          title="algún título"
        />
      </CardActionArea>
    </Card>
  );
}

export default MainBanner;
