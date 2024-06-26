import React from "react";
import {
  IconButton,
  Button,
  makeStyles,
  Typography,
  CardActionArea
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  DragIndicator as DragIndicatorIcon
} from "@material-ui/icons";

import { SortableElement, SortableHandle } from "react-sortable-hoc";
import ConfirmDeleteDish from "./modals/confirmDeleteDish";
import { useOpenDialog } from "../../hooks";
import UpdateDish from "./modals/updateDish";
import SeeDish from "./modals/seeDish";

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
  },
  divSortableHandle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
}));

const DragHandle = SortableHandle(() => {
  const classes = useStyles();
  return (
    <div className={classes.divSortableHandle}>
      <DragIndicatorIcon color="action" />
    </div>
  );
});

function ListItemDish({
  id,
  name,
  description,
  idCategory,
  price,
  photo,
  last,
  dataHandler
}) {
  const classes = useStyles();
  const [openDeleteDishDialog, dispatchOpenDeleteDishDialog] = useOpenDialog();
  const [openUpdateDialog, dispatchOpenUpdateDialog] = useOpenDialog();
  const [openSeeDish, dispatchOpenSeeDish] = useOpenDialog();

  const handleDelete = () => {
    dispatchOpenDeleteDishDialog({ type: "OPEN" });
  };
  const handleSuccessDelete = () => {
    dispatchOpenDeleteDishDialog({ type: "CLOSE" });
    dataHandler.deleteDish(id);
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
        <CardActionArea className={classes.divSortableHandle}>
          <DragHandle />
        </CardActionArea>
        <div className={classes.divButton}>
          <Button
            classes={{ root: classes.rootButton }}
            fullWidth
            onClick={() => {
              dispatchOpenSeeDish({ type: "OPEN" });
            }}
          >
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
        photo={photo}
        open={openUpdateDialog}
        dispatchOpen={dispatchOpenUpdateDialog}
        dataHandler={dataHandler}
      />
      <SeeDish
        open={openSeeDish}
        onClose={() => {
          dispatchOpenSeeDish({ type: "CLOSE" });
        }}
        name={name}
        description={description}
        price={price}
        photo={photo}
      />
    </>
  );
}

export default SortableElement(ListItemDish);
