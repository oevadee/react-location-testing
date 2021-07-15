import React from "react";

import AllRoutes from "./AllRoutes";
import NavProvider from "./providers/Nav";
import { Box } from "@material-ui/core";

const App = () => {
  const user = false;
  return (
    <Box height="100vh" width="100vw">
      {user ? (
        <NavProvider>
          <AllRoutes />
        </NavProvider>
      ) : (
        <AllRoutes />
      )}
    </Box>
  );
};

export default App;
