import React from "react";
import GridCategories from "./gridCategories";
import DivWithPadding from "../../hoc/hocDivWithPadding";
import TypographySubtitleMainPage from "../../hoc/typographySubtitleMainPage";

function Categories(props) {
  return (
    <>
      <TypographySubtitleMainPage
        variant="h5"
        component="h2"
        color="primary"
        paragraph
      >
        ¿Qué deseas comer hoy?...
      </TypographySubtitleMainPage>
      <GridCategories />
    </>
  );
}

export default DivWithPadding(Categories);
