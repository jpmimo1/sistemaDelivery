import React from "react";
import {
  Toolbar,
  Hidden,
  IconButton,
  Avatar,
  Typography,
  Button,
  InputBase,
  fade,
  makeStyles
} from "@material-ui/core";
import logo from "../logo.svg";
import { Search as SearchIcon, Menu as MenuIcon } from "@material-ui/icons";
import AvatarPc from "./avatarPc";

function MainToolBar({ onOpen }) {
  const classes = useStyles();

  return (
    <Toolbar>
      <Hidden mdUp>
        <IconButton
          color="inherit"
          onClick={onOpen}
          size="small"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <IconButton size="small">
        <Avatar alt="home" src={logo} className={classes.logo} />
      </IconButton>
      <Hidden smDown>
        <Typography variant="h6" noWrap className={classes.title}>
          Comidas y Delivery
        </Typography>
      </Hidden>
      <div className={classes.buttonRoot}>
        <Hidden smDown>
          <Button
            color="inherit"
            variant="outlined"
            className={classes.buttonLuck}
          >
            Suerte
          </Button>
        </Hidden>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "search" }}
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
        />
      </div>
      <AvatarPc />
    </Toolbar>
  );
}

export default MainToolBar;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logo: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(9),
      height: theme.spacing(9)
    }
  },
  title: {
    flexGrow: 3
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: theme.spacing(1),
    width: "100%",
    maxWidth: "30ch",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "12ch",
      "&:focus": { width: "20ch" }
    }
  },
  buttonLuck: {
    marginLeft: theme.spacing(2)
  },
  buttonRoot: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1
  },
  headerHeight: theme.mixins.toolbar
}));
