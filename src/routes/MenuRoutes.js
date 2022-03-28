import {Routes, Route} from "react-router-dom";
import {Home, Quiz} from "../pages";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export {MenuRoutes};
