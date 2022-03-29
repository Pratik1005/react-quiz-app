import "../styles/question.css";

const Question = ({data}) => {
  return (
    <div className="question-ctn">
      <p className="fw-bold pd-bottom-lg">Question: 1/{data.length}</p>
      <p className="question-title pd-bottom-lg">{data[0].question}</p>
      <div className="option-ctn">
        <p className="option pd-sm br-md text-center fw-bold">
          {data[0].option1}
        </p>
        <p className="option pd-sm br-md text-center fw-bold">
          {data[0].option2}
        </p>
        <p className="option pd-sm br-md text-center fw-bold">
          {data[0].option3}
        </p>
      </div>
    </div>
  );
};

export {Question};
