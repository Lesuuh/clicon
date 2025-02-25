import { Route, Routes } from "react-router";
import HomePage from "../pages/Homepage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
