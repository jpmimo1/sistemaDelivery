import React from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import ListDishesCategories from "./listDishesCategories";
import AddIcon from "@material-ui/icons/Add";
import AddDish from "./modals/addDish";
import AddCategoryDish from "./modals/addCategoryDish";
import { useOpenDialog } from "../../hooks";

const useStyles = makeStyles((theme) => ({
  divButtons: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

function FifthStep({ dataHandler }) {
  const [openDialogAddDish, dispatchOpenDialogAddDish] = useOpenDialog();
  const [
    openDialogAddCategory,
    dispatchOpenDialogAddCategory
  ] = useOpenDialog();
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" color="secondary" paragraph align="center">
        La Carta
      </Typography>
      <Typography color="textSecondary" variant="body2" paragraph>
        Ingrese la lista de los platos que sirve, puede cambiar el orden de los
        platos y clasificarlos por categorias.
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <ListDishesCategories dataHandler={dataHandler} />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.divButtons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatchOpenDialogAddCategory({ type: "OPEN" });
              }}
              endIcon={<AddIcon />}
            >
              Categoria
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                dispatchOpenDialogAddDish({ type: "OPEN" });
              }}
              endIcon={<AddIcon />}
            >
              Plato
            </Button>
          </div>
        </Grid>
      </Grid>
      <AddDish
        open={openDialogAddDish}
        dispatchOpen={dispatchOpenDialogAddDish}
        dataHandler={dataHandler}
      />
      <AddCategoryDish
        open={openDialogAddCategory}
        dispatchOpen={dispatchOpenDialogAddCategory}
        dataHandler={dataHandler}
      />
    </>
  );
}

export default FifthStep;
