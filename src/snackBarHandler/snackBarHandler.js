import React from "react";
import { useSnackbar } from "notistack";
import { IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

class SnackbarHandler {
  constructor(enqueueSnackbar, closeSnackbar) {
    this.enqueueSnackbar = enqueueSnackbar;
    this.closeSnackbar = closeSnackbar;
  }

  action = (key) => {
    return (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          this.closeSnackbar(key);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    );
  };

  sendFromYupErrors = (errors) => {
    errors.inner.forEach((error) => {
      this.enqueueSnackbar(`${error.params.label}: ${error.message}`, {
        variant: "error",
        autoHideDuration: 3000,
        action: this.action
      });
    });
  };
}

const useSnackbarHandler = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return new SnackbarHandler(enqueueSnackbar, closeSnackbar);
};

export default useSnackbarHandler;
