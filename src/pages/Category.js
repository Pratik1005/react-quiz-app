import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {axios} from "axios";
import {NavMenu, Footer} from "../components";

const Category = () => {
  const [quizList, setQuizList] = useState([]);
  const {quizId} = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/quiz");
        const quizDb = response.data.quiz;
        const selectedCategory = quizDb.find((item) => item.id === quizId);
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
        <div className="quiz-card">
          <img src="" alt="" />
          <div className="quiz-card-content">
            <h3>Title</h3>
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
