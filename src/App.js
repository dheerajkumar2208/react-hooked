import React from "react";
import CustomHeader from "./components/customHeader";
import Dashboard from "./pages/Dashboard";
import BodyComponent from "./pages/BodyComponent";

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
      <RouterProvider router={routes} />
  );
};

export default App;