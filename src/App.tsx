import React from "react";
import AllRoutes from "./AllRoutes";
import NavProvider from "./providers/Nav";

function App() {
  return (
    <NavProvider>
      <AllRoutes />
    </NavProvider>
  );
}

export default App;
