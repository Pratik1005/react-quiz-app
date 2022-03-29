import "../styles/question.css";
import {useState} from "react";

const Question = ({data}) => {
  const [count, setCount] = useState(0);

  const handleQuestionCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="question-ctn">
      <p className="fw-bold pd-bottom-lg">
        Question: {count + 1}/{data.length}
      </p>
      <p className="question-title pd-bottom-lg">{data[count].question}</p>
      <div className="option-ctn">
        {data[count].options.map((item) => (
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
