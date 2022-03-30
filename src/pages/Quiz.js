import {NavMenu, Footer, Question} from "../components";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Quiz = () => {
  const params = useParams();
  const [quiz, setQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizTitle, setQuizTitle] = useState("");

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
        console.log(currentQuiz.quizData);
      } catch (err) {
        console.error("Single quiz", err);
      }
    })();
  }, [params.quizId]);
  const totalQuestionCount = quiz.length;
  const goToNext = () => {
    console.log(currentQuestion);
    console.log(quiz.length);
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
