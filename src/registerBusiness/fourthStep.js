import React, { useReducer } from "react";
import { Typography, Grid, List, makeStyles, Paper } from "@material-ui/core";
import ListItemCategory from "./listItemCategory";
import ChipCategory from "./chipCategory";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    maxHeight: theme.spacing(50),
    overflow: "auto"
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    minHeight: theme.spacing(5)
  },
  paperCategories: {
    overflow: "hidden"
  }
}));

const categorias = [
  { id: 1, category: "Pollos" },
  { id: 2, category: "Parrillas" },
  { id: 3, category: "Menu del dia (Picantería)" },
  { id: 4, category: "Ceviches y Mariscos" },
  { id: 5, category: "Anticuchos" },
  { id: 6, category: "Pizzas" },
  { id: 7, category: "Caldos" },
  { id: 8, category: "Comida Local" },
  { id: 9, category: "Comida Oriental" },
  { id: 10, category: "Postres" }
];

const selectedCategoriesInitialState = [];

const selectedCategoriesReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newState = state.slice();
      newState.push(action.element);
      return newState;
    }
    case "DELETE": {
      const newState = state.filter(({ id }) => id !== action.id);
      return newState;
    }
    default:
      return state;
  }
};

function FourthStep() {
  const classes = useStyles();
  const [selectedCategories, selectedCategoriesDispatch] = useReducer(
    selectedCategoriesReducer,
    selectedCategoriesInitialState
  );
  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        Caterotia del Negocio
      </Typography>
      <Typography color="textSecondary" variant="body2" paragraph>
        Procure ser específico y preciso al seleccionar las categorías de su
        negocio, para que sus clientes lo ubiquen más rápido.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Paper component="ul" className={classes.paper}>
            {selectedCategories.map(({ id, category }) => (
              <ChipCategory
                key={id}
                id={id}
                category={category}
                dispatch={selectedCategoriesDispatch}
              />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paperCategories}>
            <List className={classes.root} disablePadding>
              {categorias.map(({ id, category }) => (
                <ListItemCategory
                  key={id}
                  id={id}
                  category={category}
                  selectedCategories={selectedCategories}
                  dispatch={selectedCategoriesDispatch}
                />
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default FourthStep;
