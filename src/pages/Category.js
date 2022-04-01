import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavMenu, Footer} from "../components";

const Category = () => {
  const [quizList, setQuizList] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const {quizId} = useParams();
  console.log(typeof quizId);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/quiz");
        const quizDb = response.data.quiz;
        console.log(quizDb);
        const selectedCategory = quizDb.find(
          (item) => item.id === parseInt(quizId)
        );
        setCategoryData({
          title: selectedCategory.categoryName,
          cardImg: selectedCategory.categoryImg,
        });
        setQuizList(selectedCategory.allQuiz);
        console.log(quizList);
      } catch (err) {
        console.error("Category quiz", err);
      }
    })();
  }, []);
  return (
    <>
      <NavMenu />
      <section>
        <h2 className="text-center">{categoryData.title}</h2>
        <div className="quiz-card-ctn">
          {quizList.map((item) => (
            <Link to={`rules/${quizId}`} key={item.id}>
              <QuizCard
                imgSrc={categoryData.cardImg}
                quizTitle={item.quizTitle}
              />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export {Category};
