import React from "react";
import {
  makeStyles,
  Dialog,
  Typography,
  Grid,
  TextField,
  Button
} from "@material-ui/core";
import ModalGeneralStyle from "../../../globals/modalGeneralStyle";


function CategoryGeneral({
  title,
  handleChange,
  name,
  description,
  onCancel,
  onSuccess,
  open,
  onClose,
  successLabel
}) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <ModalGeneralStyle
        onClose={() => {
          onClose();
        }}
      >
        <Typography variant="h5" color="secondary" paragraph align="center">
          {title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Nombre"
              name="name"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Descripción"
              name="description"
              multiline
              rows={3}
              variant="outlined"
              onChange={handleChange}
              value={description}
            />
          </Grid>

          <Grid item xs={12}>
            <div className={classes.mainButtons}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  onCancel();
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  onSuccess();
                }}
              >
                {successLabel}
              </Button>
            </div>
          </Grid>
        </Grid>
      </ModalGeneralStyle>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none"
  },
  mainButtons: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default CategoryGeneral;
