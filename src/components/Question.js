import "../styles/question.css";
import {useState} from "react";

const Question = ({data, goToNext, totalCount, currentCount}) => {
  console.log(data.options);
  const [count, setCount] = useState(0);
  const handleQuestionCount = () => {
    goToNext();
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
            onClick={handleQuestionCount}
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
