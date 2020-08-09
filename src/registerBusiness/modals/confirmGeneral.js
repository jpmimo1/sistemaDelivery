import React from "react";
import { Dialog, Typography, makeStyles, Button } from "@material-ui/core";
import ModalGeneralStyle from "../../globals/modalGeneralStyle";

function ConfirmGeneral({
  open,
  title,
  content,
  labelSuccess,
  onClose,
  onSuccess,
  onCancel
}) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <ModalGeneralStyle onClose={onClose}>
        <Typography variant="h5" color="secondary" paragraph align="center">
          {title}
        </Typography>
        <Typography variant="body1" paragraph>
          {content}
        </Typography>
        <div className={classes.mainButtons}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              onCancel();
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              onSuccess();
            }}
          >
            {labelSuccess}
          </Button>
        </div>
      </ModalGeneralStyle>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  mainButtons: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default ConfirmGeneral;
