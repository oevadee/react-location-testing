import { createTheme } from '@material-ui/core';
import { lightBlue, cyan, amber, blueGrey } from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blueGrey[600],
    },
    secondary: {
      main: amber[500],
    },
  },
});
