import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import clsx from "clsx";

/**
 * Solamente se encarga de dar los estilos principales al interior de los modales
 * les agrega un Boton para cerrar y un espacio para agregar el contenido del modal
 * @param {*} param0
 */
function ModalGeneralStyle({ children, onClose, className }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootClose}>
        <IconButton
          onClick={() => {
            onClose();
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className={clsx(classes.rootScreen, className)}>{children}</div>
    </>
  );
}

export default ModalGeneralStyle;

const useStyles = makeStyles((theme) => ({
  rootClose: {
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "flex-end"
  },
  rootScreen: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(0, 3, 7, 3)
  }
}));
