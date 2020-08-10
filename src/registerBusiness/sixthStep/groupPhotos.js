import React from "react";
import ItemPhoto from "./modals/itemPhoto";
import { Paper, makeStyles } from "@material-ui/core";
import { SortableContainer } from "react-sortable-hoc";

const useStyles = makeStyles((theme) => ({
  listItemSortable: { boxShadow: theme.shadows[4] },
  paper: {
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  }
}));

function GroupPhotos({ photos, dispatchPhotos }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {photos.map((photo, i) => (
        <ItemPhoto
          key={photo.id}
          photoItem={photo}
          index={i}
          dispatchPhotos={dispatchPhotos}
        />
      ))}
    </Paper>
  );
}

const SortableList = SortableContainer(GroupPhotos);

const ElementToRender = ({ photos, dispatchPhotos }) => {
  const classes = useStyles();
  const onSortEnd = ({ oldIndex, newIndex }) => {
    dispatchPhotos({
      type: "REORDER",
      from: oldIndex,
      to: newIndex
    });
  };

  return (
    <SortableList
      useDragHandle
      pressDelay={100}
      onSortEnd={onSortEnd}
      photos={photos}
      dispatchPhotos={dispatchPhotos}
      helperClass={classes.listItemSortable}
    />
  );
};

export default ElementToRender;
