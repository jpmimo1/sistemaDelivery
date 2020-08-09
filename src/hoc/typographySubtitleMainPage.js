import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  rootTypography: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center"
    }
  }
}));

function TypographySubtitleMainPage(props) {
  const classes = useStyle();
  return <Typography {...props} classes={{ root: classes.rootTypography }} />;
}

export default TypographySubtitleMainPage;
