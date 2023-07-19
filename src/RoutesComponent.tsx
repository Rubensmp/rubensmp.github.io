import React from "react";

import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages";

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route element={<Pages.Site />} path="/" />
    </Routes>
  );
};

export default RoutesComponent;
