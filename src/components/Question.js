import "../styles/question.css";
import {useNavigate} from "react-router-dom";
import {useQuiz} from "../context/quiz-context";

const Question = ({data, goToNext, totalCount, currentCount}) => {
  const {quizState, quizDispatch} = useQuiz();
  const navigate = useNavigate();
  const handleQuestionCount = (item) => {
    goToNext();
    console.log(currentCount);
    if (item.isCorrect) {
      quizDispatch({type: "INCREASE_SCORE"});
      console.log(quizState.totalScore);
    }
    if (currentCount === totalCount - 1) {
      console.log("last");
      navigate("/result");
    }
  };
  return (
    <div className="question-ctn">
      <p className="fw-bold pd-bottom-lg">
        Question: {currentCount + 1}/{totalCount}
      </p>
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
