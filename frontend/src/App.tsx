import React from 'react';

import AllRoutes from './AllRoutes';
import NavProvider from './providers/Nav';
import { Box } from '@material-ui/core';
import AppContext from './context/appContext';

const App = () => {
  return (
    <Box height="100vh" width="100vw">
      <AppContext>
        <NavProvider>
          <AllRoutes />
        </NavProvider>
        <AllRoutes />
      </AppContext>
    </Box>
  );
};

export default App;
