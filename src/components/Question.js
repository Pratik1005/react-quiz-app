import "../styles/question.css";
import {useNavigate} from "react-router-dom";
import {v4 as uuid} from "uuid";
import {useQuiz} from "../context/quiz-context";
import {QUIZ_ACTIONS} from "../utils/constant";

const Question = ({data, goToNext, totalCount, currentCount, quizTitle}) => {
  const {quizState, quizDispatch} = useQuiz();
  const navigate = useNavigate();
  const handleQuestionCount = (item) => {
    goToNext();
    quizDispatch({
      type: QUIZ_ACTIONS.SET_USER_SELECTED_OPTION,
      payload: item.option,
    });
    if (item.isCorrect) {
      quizDispatch({type: QUIZ_ACTIONS.INCREASE_SCORE});
    }
    if (currentCount === totalCount - 1) {
      // quizDispatch({
      //   type: QUIZ_ACTIONS.ADD_SCORE_TO_QUIZBOARD,
      //   payload: {title: quizTitle, score: quizState.totalScore},
      // });
      const currentQuizScore = {
        id: uuid(),
        title: quizTitle,
        score: quizState.totalScore,
      };
      const prevAllScores = JSON.parse(localStorage.getItem("quizScores"));
      console.log(prevAllScores);
      prevAllScores === null
        ? localStorage.setItem("quizScores", JSON.stringify([currentQuizScore]))
        : localStorage.setItem(
            "quizScores",
            JSON.stringify([currentQuizScore, ...prevAllScores])
          );

      navigate("/result");
    }
  };

  const handleQuit = () => {
    quizDispatch({type: QUIZ_ACTIONS.RESET_QUIZ_STATE});
    navigate("/");
  };
  return (
    <div className="question-ctn">
      <div className="question-head pd-bottom-lg">
        <p className="fw-bold">
          Question: {currentCount + 1}/{totalCount}
        </p>
        <button className="btn btn-primary" onClick={handleQuit}>
          Quit
        </button>
      </div>

      <p className="question-title pd-bottom-lg">{data.question}</p>
      <div className="option-ctn">
        {data.options.map((item) => (
          <p
            className="option pd-sm br-md text-center fw-bold"
            onClick={() => handleQuestionCount(item)}
            key={item.option}
          >
            {item.option}
          </p>
        ))}
      </div>
    </div>
  );
};

export {Question};
