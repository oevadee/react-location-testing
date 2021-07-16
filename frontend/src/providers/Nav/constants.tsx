import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  List as ListIcon,
  Note as NoteIcon,
  Person as PersonIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';

export const drawerWidth = 220;

export const navItems = [
  [
    {
      uuid: uuid(),
      name: 'Todos',
      url: 'todo',
      icon: <ListIcon />,
    },
    {
      uuid: uuid(),
      name: 'About',
      url: 'about',
      icon: <NoteIcon />,
    },
  ],
  [
    {
      uuid: uuid(),
      name: 'Profile',
      url: 'profile',
      icon: <PersonIcon />,
    },
    {
      uuid: uuid(),
      name: 'Logout',
      url: 'logout',
      icon: <ExitToAppIcon />,
    },
  ],
];
