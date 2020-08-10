import React from "react";
import { Typography, makeStyles, IconButton, Divider } from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import ConfirmDeleteCategory from "./modals/confirmDeleteCategory";
import { useOpenDialog } from "../../hooks";
import UpdateCategoryDish from "./modals/updateCategoryDish";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
    userSelect: "none"
  }
}));

function ListItemCategory({ name, id, description, dispatchMenu }) {
  const classes = useStyles();
  const [openDialogDelete, dispatchDialogDelete] = useOpenDialog();
  const [openDialogUpdate, dispatchDialogUpdate] = useOpenDialog();

  const handleOpenDialogDelete = () => {
    dispatchDialogDelete({ type: "OPEN" });
  };

  const handleSuccessDelete = () => {
    dispatchDialogDelete({ type: "CLOSE" });
    dispatchMenu({ type: "DELETE-CATEGORY", idCategory: id });
  };

  const handleCancelDelete = () => {
    dispatchDialogDelete({ type: "CLOSE" });
  };

  const handleOpenDialogUpdate = () => {
    dispatchDialogUpdate({ type: "OPEN" });
  };

  return (
    <>
      <div className={classes.root}>
        <IconButton
          aria-label="icon-button-edit-category"
          onClick={handleOpenDialogUpdate}
        >
          <EditIcon />
        </IconButton>
        <Typography align="center" variant="subtitle1" color="secondary">
          {name}
        </Typography>
        <IconButton
          aria-label="icon-button-delete-category"
          onClick={handleOpenDialogDelete}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <ConfirmDeleteCategory
        open={openDialogDelete}
        categoryName={name}
        onClose={handleCancelDelete}
        onSuccess={handleSuccessDelete}
      />
      <UpdateCategoryDish
        id={id}
        name={name}
        description={description}
        open={openDialogUpdate}
        dispatchOpen={dispatchDialogUpdate}
        dispatchMenu={dispatchMenu}
      />
    </>
  );
}

export default ListItemCategory;
