import React from "react";
import ItemPhoto from "./itemPhoto";
import { Paper, makeStyles } from "@material-ui/core";
import { SortableContainer } from "react-sortable-hoc";

const useStyles = makeStyles((theme) => ({
  listItemSortable: { boxShadow: theme.shadows[4] },
  paper: {
    overflow: "hidden",
    backgroundColor: theme.palette.background.default
  }
}));

function GroupPhotos({ dataHandler }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {dataHandler.data.map((photo, i) => (
        <ItemPhoto
          key={photo.id}
          photoItem={photo}
          index={i}
          dataHandler={dataHandler}
        />
      ))}
    </Paper>
  );
}

const SortableList = SortableContainer(GroupPhotos);

const ElementToRender = ({ dataHandler }) => {
  const classes = useStyles();
  const onSortEnd = ({ oldIndex, newIndex }) => {
    dataHandler.reorder(oldIndex, newIndex);
  };

  return (
    <SortableList
      useDragHandle
      pressDelay={100}
      onSortEnd={onSortEnd}
      dataHandler={dataHandler}
      helperClass={classes.listItemSortable}
    />
  );
};

export default ElementToRender;
