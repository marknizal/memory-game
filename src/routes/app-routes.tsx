import type { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/home-page";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/memory-game/" element={<Homepage />} />
    </Routes>
  );
};

export default AppRoutes;
