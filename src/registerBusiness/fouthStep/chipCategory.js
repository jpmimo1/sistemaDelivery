import React from "react";
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function ChipCategory({ id, category, dataHandler }) {
  const classes = useStyles();
  return (
    <Chip
      variant="outlined"
      size="small"
      color="primary"
      label={category}
      className={classes.chip}
      onDelete={() => {
        dataHandler.deleteElement(id);
      }}
    />
  );
}

export default ChipCategory;
