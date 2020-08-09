import React from "react";
import { Grid, Box } from "@material-ui/core";
import ContentFooter from "./contentFooter";

function Footer() {
  return (
    <Box
      component="footer"
      bgcolor={"secondary.main"}
      color={"secondary.contrastText"}
    >
      <Grid container justify="center">
        <Grid item xs={12} sm={10} md={8}>
          <ContentFooter />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
