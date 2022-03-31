import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {NavMenu, Footer, Question} from "../components";
import {useQuiz} from "../context/quiz-context";

const Quiz = () => {
  const params = useParams();
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizTitle, setQuizTitle] = useState("");
  const {quizDispatch} = useQuiz();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/quiz");
        const quizDb = response.data.quiz;
        const selectedQuiz = quizDb.filter(
          (item) => item.id === parseInt(params.quizId)
        );
        const currentQuiz = selectedQuiz[0].allQuiz[0];
        setQuizTitle(currentQuiz.quizTitle);
        setQuiz(currentQuiz.quizData);
        quizDispatch({type: "RESET"});
        quizDispatch({type: "QUIZ_DATA", payload: currentQuiz.quizData});
      } catch (err) {
        console.error("Single quiz", err);
      }
    })();
  }, [params.quizId]);
  const totalQuestionCount = quiz.length;
  const goToNext = () => {
    currentQuestion < quiz.length - 1 && setCurrentQuestion((n) => n + 1);
  };
  return (
    <>
      <NavMenu />
      <section className="app-ctn">
        <h2 className="text-center pd-lg">{quizTitle}</h2>
        {quiz.length && (
          <Question
            data={quiz[currentQuestion]}
            goToNext={goToNext}
            totalCount={totalQuestionCount}
            currentCount={currentQuestion}
          />
        )}
      </section>
      <Footer />
    </>
  );
};

export {Quiz};
