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
  InputAdornment,
  IconButton,
  FormHelperText
} from "@material-ui/core";
import {
  PhotoCamera as PhotoCameraIcon,
  Close as CloseIcon
} from "@material-ui/icons";
import SelectOutlined from "../../../generalComponents/selectOutlined";
import ModalGeneralStyle from "../../../globals/modalGeneralStyle";
import ImageUploading from "react-images-uploading";

function DishGeneral({
  title,
  handleChange,
  handleChangePhoto,
  handleBlur,
  name,
  description,
  category,
  photo,
  errors,
  touched,
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
              onBlur={handleBlur}
              error={touched.name && !!errors.name}
              helperText={touched.name && errors.name ? errors.name : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              fullWidth
              variant="outlined"
              required
              error={touched.price && !!errors.price}
            >
              <InputLabel htmlFor="price-dish">Precio</InputLabel>
              <OutlinedInput
                name="price"
                id="price-dish"
                value={price}
                onChange={handleChange}
                startAdornment={
                  <InputAdornment position="start">S/.</InputAdornment>
                }
                labelWidth={60}
                onBlur={handleBlur}
              />
              {touched.price && errors.price && (
                <FormHelperText>
                  {touched.price && errors.price ? errors.price : ""}
                </FormHelperText>
              )}
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
              onBlur={handleBlur}
              error={touched.description && !!errors.description}
              helperText={
                touched.description && errors.description
                  ? errors.description
                  : ""
              }
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

          <ImageUploading
            acceptType={["jpg", "png", "gif"]}
            maxFileSize={1024 * 1024 * 5}
            onChange={handleChangePhoto}
          >
            {({ imageList, onImageUpload, onImageRemoveAll, errors }) => {
              //Revisa que photo exita y que no sea una cadena vacia para obtener el valor de estilo con backgrounImage
              const styleImage = photo &&
                photo !== "" && {
                  backgroundImage: `url(${photo.dataURL})`
                };

              return (
                <>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
                      endIcon={<PhotoCameraIcon />}
                      onClick={onImageUpload}
                    >
                      Foto
                    </Button>
                  </Grid>
                  <Grid item xs={8}>
                    {photo && photo !== "" ? (
                      <div className={classes.imageContainer}>
                        <div
                          className={classes.divImage}
                          style={styleImage}
                        ></div>
                        <IconButton
                          onClick={
                            imageList && imageList.length > 0
                              ? imageList[0].onRemove
                              : () => {
                                  handleChangePhoto(null);
                                }
                          }
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>
                    ) : null}
                  </Grid>
                </>
              );
            }}
          </ImageUploading>

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
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  divImage: {
    width: "100%",
    maxWidth: "400px",
    maxHeight: "250px",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "150px"
    },
    height: "500px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: theme.shadows[1]
  }
}));

export default DishGeneral;
