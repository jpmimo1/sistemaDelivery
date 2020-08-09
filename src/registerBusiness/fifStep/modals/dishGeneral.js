import React from "react";
import {
  Dialog,
  Typography,
  Grid,
  TextField,
  Button,
  makeStyles,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SelectOutlined from "../../../generalComponents/selectOutlined";
import ModalGeneralStyle from "../../../globals/modalGeneralStyle";

function DishGeneral({
  title,
  handleChange,
  name,
  description,
  category,
  categories,
  onCancel,
  onSuccess,
  onClose,
  open,
  price,
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
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="price-dish">Precio</InputLabel>
              <OutlinedInput
                name="price"
                id="price-dish"
                value={price}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">S/.</InputAdornment>
                }
                labelWidth={50}
              />
            </FormControl>
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
          {categories && categories.length > 0 ? (
            <Grid item xs={12}>
              <SelectOutlined
                id="category"
                name="category"
                idLabel="category-label"
                label="Categoría"
                data={categories}
                noneLabel={"Ninguno"}
                onChange={handleChange}
                value={category}
              />
            </Grid>
          ) : null}
          <Grid item xs={4}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="secondary"
                component="span"
                endIcon={<PhotoCamera />}
              >
                Foto
              </Button>
            </label>
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

export default DishGeneral;
