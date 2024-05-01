import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
import { textToTitleFormat } from "../../functions";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: theme.spacing(11),
    [theme.breakpoints.up("lg")]: { height: theme.spacing(14) }
  }
}));

function CardCategory({ category, photo }) {
  const classes = useStyles();
  return (
    <Grid item xs={4} sm={3} md={3}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={photo} title={category} />

          <CardContent>
            <Typography
              variant="subtitle2"
              component="h3"
              align="center"
              color="secondary"
            >
              {textToTitleFormat(category)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CardCategory;
