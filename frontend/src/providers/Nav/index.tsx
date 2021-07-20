import React, { ReactNode } from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  Toolbar,
  List,
  Box,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons';
import { AppBar, Drawer, DrawerHeader } from './componenets';
import { navItems } from './constants';
import { Link, useNavigate } from 'react-location';
import { useState } from 'react';
import { useApp as useAppContext } from '../../context/appContext';

interface Props {
  children: ReactNode;
}

const NavProvider = ({ children }: Props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { user } = useAppContext();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => localStorage.removeItem('token');

  if (!user) return <>{children}</>;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            React location testing
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navItems[0].map(({ uuid, name, url, icon }, index) => {
            return (
              <Link to={url} key={uuid} style={styles.link}>
                <ListItem button>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Divider />
        <List>
          {navItems[1].map(({ uuid, name, url, icon }, index) => (
            <>
              {url === 'logout' ? (
                <ListItem button onClick={handleLogout}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              ) : (
                <Link to={url} key={uuid} style={styles.link}>
                  <ListItem button>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                </Link>
              )}
            </>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ height: '100vh', flexGrow: 1, flex: 1, p: 3, pt: 12 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default NavProvider;

const styles = {
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};
