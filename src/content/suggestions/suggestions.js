import React from "react";
import HocDivWithPadding from "../../hoc/hocDivWithPadding";
import TypographySubtitleMainPage from "../../hoc/typographySubtitleMainPage";
import GridRestaurants from "../restaurant/gridRestaurants";
import CardRestaurant from "../restaurant/cardRestaurant";
import data from "../restaurant/data.json";
import { breakpointsReturns } from "../../theme/theme";

function Suggestions() {
  const dataSugestions = data.restaurants.filter(({ sugestion }) => sugestion);
  const numberCard = breakpointsReturns({ xs: 2, sm: 3, md: 3, lg: 3, xl: 3 });
  return (
    <>
      <TypographySubtitleMainPage
        variant="h5"
        component="h2"
        color="primary"
        paragraph
      >
        Creemos que te gustarán...
      </TypographySubtitleMainPage>
      <GridRestaurants>
        {dataSugestions.map((restaurant, i) =>
          numberCard > i ? (
            <CardRestaurant {...restaurant} key={restaurant.id} />
          ) : null
        )}
      </GridRestaurants>
    </>
  );
}

export default HocDivWithPadding(Suggestions);
