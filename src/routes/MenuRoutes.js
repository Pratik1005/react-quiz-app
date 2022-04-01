import {Routes, Route} from "react-router-dom";
import {Home, Category, Quiz, Rules, Result} from "../pages";

const MenuRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:quizId" element={<Category />} />
      <Route path="/rules/:quizId/:quizTitle" element={<Rules />} />
      <Route path="/quiz/:quizId/:quizTitle" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export {MenuRoutes};
