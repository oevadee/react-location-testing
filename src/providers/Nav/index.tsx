import React, { ReactNode } from "react";

import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { Link } from "react-location";

import {
  CssBaseline,
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";
import { drawerWidth, navItems } from "./constants";

interface Props {
  children: ReactNode;
}

function NavProvider({ children }: Props) {
  const styles = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(styles.appBar, {
          [styles.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(styles.menuButton, open && styles.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React location
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={styles.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <Box className={styles.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems[0].map(({ uuid, name, icon, url }) => (
            <Link key={uuid} to={url} className={styles.link}>
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {navItems[1].map(({ uuid, name, icon, url }) => (
            <Link key={uuid} to={url} className={styles.link}>
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(styles.content, {
          [styles.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  );
}

export default NavProvider;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    paddingTop: theme.spacing(12),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));
