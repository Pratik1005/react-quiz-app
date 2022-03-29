import {NavMenu, Footer, Rules} from "../components";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Quiz = () => {
  const params = useParams();
  console.log(params);
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/quiz`);
        const allQuiz = response.data.quiz;
        console.log("allquiz", allQuiz);
        const selectedQuiz = allQuiz.filter(
          (item) => item.id === parseInt(params.quizId)
        );
        console.log("filter", selectedQuiz);
        // setQuiz([...selectedQuiz]);
        // console.log(quiz);
      } catch (err) {
        console.error("Single quiz", err);
      }
    })();
  }, []);
  return (
    <>
      <NavMenu />
      <h1>Quiz</h1>
      <Footer />
    </>
  );
};

export {Quiz};
