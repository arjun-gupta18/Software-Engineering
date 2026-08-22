import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./src/pages/Dashboard";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;