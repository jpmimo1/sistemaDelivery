import React, { useReducer } from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import ListDishesCategories from "./listDishesCategories";
import AddIcon from "@material-ui/icons/Add";
import arrayMove from "array-move";
import AddDish from "./modals/addDish";
import AddCategoryDish from "./modals/addCategoryDish";
import { useOpenDialog } from "../../hooks";

const useStyles = makeStyles((theme) => ({
  divButtons: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const menuInitialState = {
  dishes: [],
  categories: []
};
const menuReducer = (state, action) => {
  switch (action.type) {
    case "ADD-DISH": {
      let copyDishes = state.dishes.slice();
      copyDishes.push(action.dish);
      return { ...state, dishes: copyDishes };
    }
    case "ADD-DISH-CATEGORY": {
      let newCategories = state.categories.map((category) => {
        if (category.id !== action.idCategory) {
          return category;
        }
        let newDishes = category.dishes.slice();
        newDishes.push(action.dish);
        return { ...category, dishes: newDishes };
      });

      return { ...state, categories: newCategories };
    }
    case "ADD-CATEGORY": {
      let copyCategories = state.categories.slice();
      copyCategories.push(action.category);
      return { ...state, categories: copyCategories };
    }
    case "REORDER-DISH": {
      if (!action.idCategory) {
        let newDishes = arrayMove(state.dishes, action.from, action.to);
        return { ...state, dishes: newDishes };
      }
      let newCategories = state.categories.map((category) => {
        if (category.id !== action.idCategory) return category;
        let newDishes = arrayMove(category.dishes, action.from, action.to);
        return { ...category, dishes: newDishes };
      });
      return { ...state, categories: newCategories };
    }
    case "DELETE-DISH": {
      let copyDishes = state.dishes.filter(({ id }) => id !== action.id);
      let copyCategories = state.categories.map((category) => {
        let newDishes = category.dishes.filter(({ id }) => id !== action.id);
        return { ...category, dishes: newDishes };
      });
      return { ...state, dishes: copyDishes, categories: copyCategories };
    }
    case "DELETE-CATEGORY": {
      let newCategories = state.categories.filter(
        (category) => category.id !== action.idCategory
      );
      return { ...state, categories: newCategories };
    }
    //category=>datos a insertar en el category
    case "UPDATE-CATEGORY": {
      let newCategories = state.categories.map((category) => {
        if (action.category.id !== category.id) return category;
        return { ...category, ...action.category };
      });
      return { ...state, categories: newCategories };
    }
    /*
    dish=>datos a insertar en el dish
    idCategory=> el nuevo idCategory en el que estará el dish
    */
    case "UPDATE-DISH": {
      let newIdCategory = action.idCategory;
      let newDish = action.dish;
      let beforeDishes = state.dishes;
      let beforeCategories = state.categories;

      let changeCategory = false;
      if (newIdCategory === "") {
        const existDish = searchDishInArrayDishes(newDish.id, beforeDishes);
        changeCategory = !existDish;
      } else {
        const existDish = searchDishInCategory(
          newDish.id,
          newIdCategory,
          beforeCategories
        );
        changeCategory = !existDish;
      }

      if (!changeCategory) {
        return updateDish(newDish, newIdCategory, state);
      }
      return updateDishOtherCategory(newDish, newIdCategory, state);
    }
    default:
      return state;
  }
};

const searchDishInArrayDishes = (id, dishes) => {
  return dishes.reduce((prev, dish) => {
    if (dish.id === id) {
      return true;
    }
    return prev || false;
  }, false);
};

const searchDishInCategory = (id, idCategory, categories) => {
  const category = categories.filter((category) => {
    return category.id === idCategory;
  })[0];

  return category.dishes.reduce((prev, dish) => {
    if (dish.id === id) {
      return true;
    }
    return prev || false;
  }, false);
};

const updateDish = (newDish, idCategory, prevState) => {
  if (idCategory === "") {
    const newDishes = prevState.dishes.map((dish) => {
      if (dish.id !== newDish.id) return dish;
      return { ...dish, ...newDish };
    });
    return { ...prevState, dishes: newDishes };
  } else {
    const newCategories = prevState.categories.map((category) => {
      if (category.id !== idCategory) return category;
      const newDishes = category.dishes.map((dish) => {
        if (dish.id !== newDish.id) return dish;
        return { ...dish, ...newDish };
      });
      return { ...category, dishes: newDishes };
    });
    return { ...prevState, categories: newCategories };
  }
};

const updateDishOtherCategory = (newDish, newIdCategory, prevState) => {
  let prevDish = {};
  let newDishes = prevState.dishes.filter((dish) => {
    if (dish.id === newDish.id) {
      prevDish = dish;
      return false;
    }
    return true;
  });

  let newCategories = prevState.categories.map((category) => {
    let newDishes = category.dishes.filter((dish) => {
      if (dish.id === newDish.id) {
        prevDish = dish;
        return false;
      }
      return true;
    });
    return { ...category, dishes: newDishes };
  });

  let newDishToInsert = { ...prevDish, ...newDish };

  if (newIdCategory === "") {
    newDishes.push(newDishToInsert);
  } else {
    newCategories = newCategories.map((category) => {
      if (category.id !== newIdCategory) return category;
      let newDishes = category.dishes.slice();
      newDishes.push(newDishToInsert);
      return { ...category, dishes: newDishes };
    });
  }

  return { ...prevState, categories: newCategories, dishes: newDishes };
};

function FifthStep() {
  const [{ dishes, categories }, dispatchMenu] = useReducer(
    menuReducer,
    menuInitialState
  );
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
          <ListDishesCategories
            dishes={dishes}
            categories={categories}
            dispatchMenu={dispatchMenu}
          />
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
        categories={categories}
        dispatchMenu={dispatchMenu}
      />
      <AddCategoryDish
        open={openDialogAddCategory}
        dispatchOpen={dispatchOpenDialogAddCategory}
        dispatchMenu={dispatchMenu}
        categories={categories}
      />
    </>
  );
}

export default FifthStep;
