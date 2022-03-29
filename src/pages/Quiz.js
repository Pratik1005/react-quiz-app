import {NavMenu, Footer, Question} from "../components";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Quiz = () => {
  const params = useParams();
  const [quiz, setQuiz] = useState([{}]);
  const [quizTitle, setQuizTitle] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/quiz`);
        const quizDb = response.data.quiz;
        const selectedQuiz = quizDb.filter(
          (item) => item.id === parseInt(params.quizId)
        );
        const currentQuiz = selectedQuiz[0].allQuiz[0];
        setQuizTitle(currentQuiz.quizTitle);
        setQuiz(currentQuiz.quizData);
      } catch (err) {
        console.error("Single quiz", err);
      }
    })();
  }, [params.quizId]);
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center pd-lg">{quizTitle}</h2>
        <Question data={quiz} />
      </section>
      <Footer />
    </>
  );
};

export {Quiz};
