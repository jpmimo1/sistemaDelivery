import React from "react";
import {
  Dialog,
  CardMedia,
  makeStyles,
  CardContent,
  Typography
} from "@material-ui/core";
import ModalGeneralStyle from "../../../globals/modalGeneralStyle";
import numeral from "numeral";

function SeeDish({ open, onClose, name, description, photo, price }) {
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      classes={{ paper: classes.dialogRoot }}
    >
      <ModalGeneralStyle onClose={onClose} className={classes.root}>
        <Typography
          noWrap
          variant="h5"
          align="center"
          className={classes.title}
          color="secondary"
        >
          {name}
        </Typography>
        {photo && photo !== "" && (
          <CardMedia
            image={photo.dataURL}
            title={name}
            className={classes.cardMedia}
          />
        )}
        {description && description !== "" && (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        )}
        {price && price !== "" && !isNaN(Number(price)) && (
          <div className={classes.divPrice}>
            <Typography
              variant="body1"
              className={classes.labelPrice}
            >{`Precio: S/. `}</Typography>
            <Typography variant="h5" component="span">
              {numeral(price).format("0.00")}
            </Typography>
          </div>
        )}
      </ModalGeneralStyle>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 0, 3, 0)
  },
  dialogRoot: {
    width: "100%"
  },
  cardMedia: {
    width: "100%",
    maxWidth: "400px",
    maxHeight: "250px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "170px"
    },
    height: "500px"
  },
  title: {
    padding: theme.spacing(1)
  },
  divPrice: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1),
    alignItems: "baseline"
  },
  labelPrice: {
    marginRight: theme.spacing(1)
  }
}));

export default SeeDish;
