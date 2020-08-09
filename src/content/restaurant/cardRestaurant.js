import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  makeStyles,
  IconButton,
  Divider
} from "@material-ui/core";
import {
  FavoriteBorder as FavoriteBorderIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  StarHalf as StarHalfIcon
} from "@material-ui/icons";
import { textToTitleFormat } from "../../functions";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: theme.spacing(17),
    [theme.breakpoints.up("md")]: { height: theme.spacing(18) },
    [theme.breakpoints.up("lg")]: { height: theme.spacing(20) }
  },
  cardContent: {
    [theme.breakpoints.down("sm")]: { padding: theme.spacing(1) }
  },
  cardTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(1)
  },
  price: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline"
  }
}));

function CardRestaurant({
  photo,
  name,
  favorite,
  categories,
  priceMin,
  rating
}) {
  const classes = useStyles();
  const colorStars = "secondary";
  const categoriesUpperCase = categories.map((category) =>
    textToTitleFormat(category)
  );
  return (
    <Grid item xs={6} sm={4} md={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            image={photo}
            title={textToTitleFormat(name)}
            className={classes.media}
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardTitle}>
            <Typography variant="subtitle2">
              {textToTitleFormat(name)}
            </Typography>
            <IconButton aria-label="Me gusta" color="secondary">
              <FavoriteBorderIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.cardTitle}>
            <Typography variant="caption" noWrap>
              {categoriesUpperCase.join(", ")}
            </Typography>
          </div>
          <div className={classes.cardTitle}>
            <Typography variant="caption" noWrap>
              Platos desde:
            </Typography>
            <div className={classes.price}>
              <Typography variant="subtitle2" noWrap>
                {"S/."}
              </Typography>
              <Typography variant="h6" noWrap>
                {priceMin.toFixed(2)}
              </Typography>
            </div>
          </div>
          <Divider />
          <div className={classes.rating}>
            <StarIcon fontSize="small" color={colorStars} />
            <StarIcon fontSize="small" color={colorStars} />
            <StarHalfIcon fontSize="small" color={colorStars} />
            <StarBorderIcon fontSize="small" color={colorStars} />
            <StarBorderIcon fontSize="small" color={colorStars} />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CardRestaurant;
