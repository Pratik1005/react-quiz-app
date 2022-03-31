import {Routes, Route} from "react-router-dom";
import {Home, Quiz, Rules, Result} from "../pages";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rules/:quizId" element={<Rules />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export {MenuRoutes};
