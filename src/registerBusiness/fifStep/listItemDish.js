import React from "react";
import { IconButton, Button, makeStyles, Typography } from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  DragIndicator as DragIndicatorIcon
} from "@material-ui/icons";

import { SortableElement, SortableHandle } from "react-sortable-hoc";
import ConfirmDeleteDish from "./modals/confirmDeleteDish";
import { useOpenDialog } from "../../hooks";
import UpdateDish from "./modals/updateDish";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1]
  },
  divButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: 1,
    maxWidth: `calc(100% - ${theme.spacing(18)}px)`
  },
  rootButton: {
    justifyContent: "flex-start",
    textTransform: "none",
    whiteSpace: "nowrap"
  },
  typographyPrice: {
    padding: theme.spacing(0, 2)
  }
}));

const DragHandle = SortableHandle(() => (
  <IconButton aria-label="sortable-icon-button">
    <DragIndicatorIcon />
  </IconButton>
));

function ListItemDish({
  id,
  name,
  description,
  idCategory,
  price,
  photo,
  last,
  dispatchMenu,
  categories
}) {
  const classes = useStyles();
  const [openDeleteDishDialog, dispatchOpenDeleteDishDialog] = useOpenDialog();
  const [openUpdateDialog, dispatchOpenUpdateDialog] = useOpenDialog();

  const handleDelete = () => {
    dispatchOpenDeleteDishDialog({ type: "OPEN" });
  };
  const handleSuccessDelete = () => {
    dispatchOpenDeleteDishDialog({ type: "CLOSE" });
    dispatchMenu({ type: "DELETE-DISH", id: id });
  };
  const handleCancelDelete = () => {
    dispatchOpenDeleteDishDialog({ type: "CLOSE" });
  };
  const handleOpenUpdateDialog = () => {
    dispatchOpenUpdateDialog({ type: "OPEN" });
  };

  return (
    <>
      <div className={classes.root}>
        <DragHandle />
        <div className={classes.divButton}>
          <Button classes={{ root: classes.rootButton }} fullWidth>
            <Typography variant="body2" noWrap>
              {name}
            </Typography>
          </Button>
        </div>
        <IconButton
          aria-label="edit-icon-button"
          onClick={handleOpenUpdateDialog}
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete-icon-button" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      <ConfirmDeleteDish
        open={openDeleteDishDialog}
        dishName={name}
        onClose={handleCancelDelete}
        onSuccess={handleSuccessDelete}
      />
      <UpdateDish
        id={id}
        name={name}
        description={description}
        price={price}
        category={idCategory ? idCategory : ""}
        open={openUpdateDialog}
        dispatchOpen={dispatchOpenUpdateDialog}
        categories={categories}
        dispatchMenu={dispatchMenu}
      />
    </>
  );
}

export default SortableElement(ListItemDish);
