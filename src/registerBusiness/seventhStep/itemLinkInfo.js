import React from "react";
import { Info as InfoIcon } from "@material-ui/icons";
import { Link, IconButton, makeStyles } from "@material-ui/core";

function ItemLinkInfo({ MainIcon, text }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link component="button" className={classes.link}>
        <MainIcon className={classes.iconLink} />
        {text}
      </Link>
      <div className={classes.divInfo}>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  link: {
    display: "flex",
    alignItems: "center",
    textAlign: "left"
  },
  iconLink: {
    marginRight: theme.spacing(1),
    transform: "translateY(-4px)"
  },
  divInfo: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: "1"
  }
}));

export default ItemLinkInfo;
