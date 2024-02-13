import React from "react";
import "./App.css";
import CustomHeader from "./components/customHeader";
import Dashboard from "./pages/Dashboard";
import BodyComponent from "./pages/BodyComponent";
// import { StyledEngineProvider } from "@mui/material/styles";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from "react-router-dom";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<CustomHeader />}>
        <Route index element={<Dashboard />} />
        <Route path=":entity" element={<Navigate to="myRequest-all" />} />
        <Route path=":entity/:subEntity" element={<BodyComponent />} />
      </Route>
    )
  );

  return (
    // <StyledEngineProvider injectFirst>
      <RouterProvider router={routes} />
    // </StyledEngineProvider>
  );
};

export default App;