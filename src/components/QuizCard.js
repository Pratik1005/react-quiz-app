const QuizCard = ({imgSrc, quizTitle}) => {
  return (
    <div className="quiz-card">
      <img src={imgSrc} alt={quizTitle} className="img-responsive" />
      <div className="quiz-card-content">
        <p className="fw-bold">{categoryTitle}</p>
        <button className="btn btn-primary">Play Quiz</button>
      </div>
    </div>
  );
};
