import React from "react";
import ChipCategory from "./chipCategory";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
}));

function ListChipsCategory({ dataHandler }) {
  const classes = useStyles();
  return dataHandler.data.length ? (
    <div className={classes.root}>
      {dataHandler.data.map(({ id, category }) => (
        <ChipCategory
          key={id}
          id={id}
          category={category}
          dataHandler={dataHandler}
        />
      ))}
    </div>
  ) : null;
}

export default ListChipsCategory;
