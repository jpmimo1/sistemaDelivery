import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import ListItemDish from "./listItemDish";
import { SortableContainer } from "react-sortable-hoc";

const useStyles = makeStyles((theme) => ({
  listItemSortable: { boxShadow: theme.shadows[4] },
  paper: {
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  }
}));

function ListDishes({ dataHandler, idCategory, dishes }) {
  const classes = useStyles();
  const dishesActual = dishes ? dishes : dataHandler.data.dishes;
  const dishesComponents = dishesActual.map((dish, i) => {
    const { id } = dish;
    return (
      <ListItemDish
        key={id}
        {...dish}
        last={i >= dishesActual.length - 1}
        index={i}
        idCategory={idCategory}
        dataHandler={dataHandler}
      />
    );
  });
  return (
    <>
      <Paper className={classes.paper}>{dishesComponents}</Paper>
    </>
  );
}

const SortableList = SortableContainer(ListDishes);

const ElementToRender = ({ idCategory, dishes, dataHandler }) => {
  const classes = useStyles();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dataHandler.reorderDish(oldIndex, newIndex, idCategory);
  };

  return (
    <SortableList
      useDragHandle
      idCategory={idCategory}
      pressDelay={100}
      helperClass={classes.listItemSortable}
      onSortEnd={onSortEnd}
      dishes={dishes}
      dataHandler={dataHandler}
    />
  );
};

export default ElementToRender;
