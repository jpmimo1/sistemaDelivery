import React, { useState, useEffect } from "react";
import HocDivWithPadding from "../../hoc/hocDivWithPadding";
import TypographySubtitleMainPage from "../../hoc/typographySubtitleMainPage";
import GridRestaurants from "../restaurant/gridRestaurants";
import CardRestaurant from "../restaurant/cardRestaurant";
import { Button, makeStyles } from "@material-ui/core";
import { breakpointsReturns } from "../../theme/theme";
import data from "../restaurant/data.json";
import { sortRandomArray } from "../../functions";

const useStyles = makeStyles((theme) => ({
  divButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    display: "flex",
    justifyContent: "flex-end"
  }
}));

function Availables() {
  const classes = useStyles();
  const dataAvailables = sortRandomArray(data.restaurants);
  const cardsToShow = breakpointsReturns({ xs: 6, sm: 6, md: 9, lg: 9, xl: 9 });
  const cardsToAdd = breakpointsReturns({ xs: 2, sm: 3, md: 6, lg: 6, xl: 9 });

  const [cardsActual, setCardsActual] = useState(cardsToShow);

  useEffect(() => {
    setCardsActual(cardsToShow);
  }, [cardsToShow]);

  const handlerShowMore = () => {
    cardsActual < dataAvailables.length &&
      setCardsActual(cardsActual + cardsToAdd);
  };

  return (
    <>
      <TypographySubtitleMainPage
        variant="h5"
        component="h2"
        color="primary"
        paragraph
      >
        Disponibles por tu zona
      </TypographySubtitleMainPage>
      <GridRestaurants>
        {dataAvailables.map((restaurant, i) =>
          i < cardsActual ? (
            <CardRestaurant key={restaurant.id} {...restaurant} />
          ) : null
        )}
      </GridRestaurants>
      <div className={classes.divButton}>
        <Button
          className={classes.buttonVerMas}
          color="secondary"
          variant="contained"
          fullWidth={breakpointsReturns({
            xs: true,
            sm: false,
            md: false,
            lg: false,
            xl: false
          })}
          onClick={handlerShowMore}
        >
          Ver más..
        </Button>
      </div>
    </>
  );
}

export default HocDivWithPadding(Availables);
