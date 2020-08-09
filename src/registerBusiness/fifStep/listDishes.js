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

function ListDishes({ dishes, dispatchMenu, idCategory, categories }) {
  const classes = useStyles();
  const dishesComponents = dishes.map((dish, i) => {
    const { id } = dish;
    return (
      <ListItemDish
        key={id}
        {...dish}
        last={i >= dishes.length - 1}
        index={i}
        dispatchMenu={dispatchMenu}
        idCategory={idCategory}
        categories={categories}
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

const ElementToRender = ({ dishes, idCategory, dispatchMenu, categories }) => {
  const classes = useStyles();

  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatchMenu({
      type: "REORDER-DISH",
      idCategory,
      from: oldIndex,
      to: newIndex
    });
  };

  return (
    <SortableList
      useDragHandle
      dishes={dishes}
      idCategory={idCategory}
      categories={categories}
      pressDelay={100}
      helperClass={classes.listItemSortable}
      onSortEnd={onSortEnd}
      dispatchMenu={dispatchMenu}
    />
  );
};

export default ElementToRender;
