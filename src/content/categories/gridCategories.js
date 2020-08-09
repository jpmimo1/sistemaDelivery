import React from "react";
import { Grid } from "@material-ui/core";
import CardCategory from "./cardCategory";
import { breakpointsReturns } from "../../theme/theme";
import data from "./dataText.json";

function GridCategories(props) {
  const spacing = breakpointsReturns({ xs: 2, sm: 2, md: 3, lg: 4, xl: 5 });
  const cardsNumber = breakpointsReturns({ xs: 3, sm: 4, md: 4, lg: 4, xl: 4 });
  const { categories } = data;

  return (
    <Grid container spacing={spacing} justify="center">
      {categories.map((category, i) =>
        cardsNumber > i ? (
          <CardCategory {...category} key={category.id} />
        ) : null
      )}
    </Grid>
  );
}

export default GridCategories;
