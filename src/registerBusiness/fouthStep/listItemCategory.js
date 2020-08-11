import React from "react";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Info as InfoIcon } from "@material-ui/icons";

function ListItemCategory({ id, category, selectedCategories, dispatch }) {
  const isSelect = selectedCategories.reduce((prev, element) => {
    return prev || element.id === id;
  }, false);

  const handlerOnClick = () => {
    isSelect
      ? dispatch({ type: "DELETE", id })
      : dispatch({ type: "ADD", element: { id, category } });
  };

  return (
    <ListItem key={id} role={undefined} dense button onClick={handlerOnClick}>
      <ListItemIcon>
        <Checkbox
          checked={isSelect}
          tabIndex={-1}
          disableRipple
          inputProps={{ "aria-labelledby": category }}
        />
      </ListItemIcon>
      <ListItemText primary={category} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <InfoIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ListItemCategory;
