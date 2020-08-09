import { createMuiTheme, useMediaQuery } from "@material-ui/core";
import { green, blue, red, indigo } from "@material-ui/core/colors";

const googleColor = red,
  facebookColor = indigo;
const theme = createMuiTheme({
  palette: {
    primary: { main: blue[900] },
    secondary: { main: green[700] },
    google: { main: googleColor[500], dark: googleColor[700] },
    facebook: { main: facebookColor[500], dark: facebookColor[700] }
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48
      },
      "@media (min-width:960px)": { minHeight: 88 }
    }
  }
});

/**
 * Devuelve el valor del arreglo returns correspondiente al Breakpoint actual
 * @param {Object} returns - Objeto de los valores a retornar por cada breakpoint
 */
export const breakpointsReturns = (returns) => {
  const breackpointFunction = theme.breakpoints.only;
  let actualKey = Object.keys(returns).filter((breakpoint) =>
    useMediaQuery(breackpointFunction(breakpoint))
  );
  return returns[actualKey];
};

export default theme;
