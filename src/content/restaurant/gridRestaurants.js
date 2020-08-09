import React from "react";
import { Grid } from "@material-ui/core";
import { breakpointsReturns } from "../../theme/theme";

function GridRestaurants(props) {
  const spacing = breakpointsReturns({ xs: 2, sm: 2, md: 3, lg: 4, xl: 5 });

  return (
    <Grid container spacing={spacing} justify="center">
      {props.children}
    </Grid>
  );
}

export default GridRestaurants;
