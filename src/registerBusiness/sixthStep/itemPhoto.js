import React from "react";
import { SortableHandle, SortableElement } from "react-sortable-hoc";
import {
  IconButton,
  CardMedia,
  makeStyles,
  CardActionArea
} from "@material-ui/core";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  DragIndicator as DragIndicatorIcon
} from "@material-ui/icons";
import ConfirmGeneral from "../modals/confirmGeneral";
import { useOpenDialog } from "../../hooks";
import UpdatePhoto from "./modals/updatePhoto";

const DragHandle = SortableHandle(() => {
  const classes = useStyles();
  return (
    <div className={classes.divSortableHandle}>
      <DragIndicatorIcon color="action" />
    </div>
  );
});

function ItemPhoto({ photoItem, dataHandler }) {
  const { id, description, photo } = photoItem;

  const [openConfirmDelete, dispatchOpenConfirmDelete] = useOpenDialog();
  const [openUpdate, dispatchOpenUpdate] = useOpenDialog();

  const classes = useStyles();

  const handleSuccessDelete = () => {
    dataHandler.remove(id);
    dispatchOpenConfirmDelete({ type: "CLOSE" });
  };

  return (
    <>
      <div className={classes.root}>
        <CardActionArea className={classes.divSortableHandle}>
          <DragHandle />
        </CardActionArea>
        <div>
          {photo && photo !== "" && (
            <CardMedia
              image={photo.dataURL}
              title={description}
              className={classes.image}
            />
          )}
        </div>
        <div className={classes.buttons}>
          <IconButton onClick={() => dispatchOpenUpdate({ type: "OPEN" })}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatchOpenConfirmDelete({ type: "OPEN" })}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <UpdatePhoto
        open={openUpdate}
        dispatchOpen={dispatchOpenUpdate}
        dataHandler={dataHandler}
        photoItem={photoItem}
      />
      <ConfirmGeneral
        open={openConfirmDelete}
        title="Eliminar Imagen"
        content="Confirme para eliminar esta imagen."
        labelSuccess="Eliminar"
        onClose={() => {
          dispatchOpenConfirmDelete({ type: "CLOSE" });
        }}
        onCancel={() => {
          dispatchOpenConfirmDelete({ type: "CLOSE" });
        }}
        onSuccess={handleSuccessDelete}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2, 1, 0),
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper
  },
  image: {
    width: "100px",
    height: "70px",
    boxShadow: theme.shadows[1],
    margin: theme.spacing(0, 2)
  },
  buttons: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  divButtonPrincipal: {
    position: "relative"
  },
  labelButtonPrincipal: {
    position: "absolute",
    top: "100%",
    left: 0
  },
  divSortableHandle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: theme.spacing(6),
    height: theme.spacing(6)
  }
}));

export default SortableElement(ItemPhoto);
