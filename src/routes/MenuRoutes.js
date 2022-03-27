import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export {MenuRoutes};
