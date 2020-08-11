import React from "react";
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function ChipCategory({ id, category, dispatch }) {
  const classes = useStyles();
  return (
    <li>
      <Chip
        variant="outlined"
        size="small"
        color="primary"
        label={category}
        className={classes.chip}
        onDelete={() => {
          dispatch({ type: "DELETE", id });
        }}
      />
    </li>
  );
}

export default ChipCategory;
