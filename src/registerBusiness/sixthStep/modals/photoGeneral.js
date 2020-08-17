import React from "react";
import {
  Dialog,
  Grid,
  Typography,
  TextField,
  makeStyles,
  Button,
  IconButton,
  FormHelperText
} from "@material-ui/core";
import ModalGeneralStyle from "../../../globals/modalGeneralStyle";
import ImageUploading from "react-images-uploading";
import {
  PhotoCamera as PhotoCameraIcon,
  Close as CloseIcon
} from "@material-ui/icons";

function PhotoGeneral({
  title,
  open,
  onClose,
  description,
  photo,
  handleChange,
  handleChangePhoto,
  successLabel,
  onSuccess,
  handleBlur,
  errors,
  touched
}) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose} fullScreen>
      <ModalGeneralStyle onClose={onClose}>
        <Typography variant="h5" color="secondary" paragraph align="center">
          {title}
        </Typography>
        <Grid container spacing={2}>
          <ImageUploading
            acceptType={["jpg", "png", "gif"]}
            maxFileSize={1024 * 1024 * 5}
            onChange={handleChangePhoto}
          >
            {({ imageList, onImageUpload }) => {
              //Revisa que photo exita y que no sea una cadena vacia para obtener el valor de estilo con backgrounImage
              const styleImage = photo &&
                photo !== "" && {
                  backgroundImage: `url(${photo.dataURL})`
                };
              return (
                <>
                  <Grid item xs={photo && photo !== "" ? 4 : 12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      component="span"
                      endIcon={<PhotoCameraIcon />}
                      onClick={onImageUpload}
                    >
                      Foto
                    </Button>
                    {touched.photo && errors.photo && (
                      <FormHelperText error>
                        {touched.photo && errors.photo ? errors.photo : ""}
                      </FormHelperText>
                    )}
                  </Grid>
                  {photo && photo !== "" ? (
                    <Grid item xs={8}>
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
                    </Grid>
                  ) : null}
                </>
              );
            }}
          </ImageUploading>
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
          <Grid item xs={12}>
            <div className={classes.mainButtons}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onSuccess}
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

export default PhotoGeneral;
