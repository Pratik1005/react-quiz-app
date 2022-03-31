import "../styles/question.css";
import {NavMenu, Footer} from "../components";
import {useQuiz} from "../context/quiz-context";

const Result = () => {
  const {quizState} = useQuiz();
  console.log(quizState.userSelectedOptions);
  const isUserCorrect = (index, choice) => {
    const selectedOption = quizState.userSelectedOptions[index];
    if (selectedOption === choice.option) {
      if (!choice.isCorrect) {
        console.log("incorrect", choice.option);
        return "incorrect-option";
      }
    }
  };
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center pd-lg">Result</h2>
        <p className="question-title text-center">
          You Scored: {quizState.totalScore}/100
        </p>
        <div className="question-ctn">
          {quizState.quizData.map((item, index) => (
            <div key={item.id} className="mg-bottom-md pd-bottom-lg">
              <p className="question-title pd-bottom-lg">{item.question}</p>
              <div className="option-ctn">
                {item.options.map((choice) => (
                  <p
                    className={`option result-options ${
                      choice.isCorrect ? "correct-option" : null
                    } ${isUserCorrect(
                      index,
                      choice
                    )} pd-sm br-md text-center fw-bold`}
                    key={choice.option}
                  >
                    {choice.option}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export {Result};
