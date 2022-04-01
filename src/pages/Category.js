import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavMenu, Footer} from "../components";

const Category = () => {
  const [quizList, setQuizList] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const {quizId} = useParams();
  console.log(typeof quizId);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/quiz");
        const quizDb = response.data.quiz;
        console.log(quizDb);
        const selectedCategory = quizDb.find(
          (item) => item.id === parseInt(quizId)
        );
        setCategoryTitle(selectedCategory.categoryName);
        setQuizList(selectedCategory.allQuiz);
        console.log(quizList);
      } catch (err) {
        console.error("Category quiz", err);
      }
    })();
  }, []);
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">{categoryTitle}</h2>
        <div className="quiz-card">
          <img src="" alt="" />
          <div className="quiz-card-content">
            <h3>{categoryTitle}</h3>
            <Link to={`/rules/${quizId}`} className="btn btn-primary">
              Play Quiz
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export {Category};
