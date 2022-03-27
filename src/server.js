import {createServer} from "miragejs";
import {v4 as uuid} from "uuid";
createServer(
  {
    routes() {
      this.namespace = "api";

      this.get("/quiz", () => {
        return {
          quiz: {
            featuredCategories: [
              {
                id: uuid(),
                imgSrc: "https://assetpoint.netlify.app/images/general.jpg",
                title: "Stock Investment",
              },
              {
                id: uuid(),
                imgSrc: "https://assetpoint.netlify.app/images/general.jpg",
                title: "Real Estate",
              },
              {
                id: uuid(),
                imgSrc: "https://assetpoint.netlify.app/images/general.jpg",
                title: "Self Help",
              },
            ],
            category1: {
              id: uuid(),
              quizData: [
                {
                  id: uuid(),
                  question: "question 1",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
                {
                  id: uuid(),
                  question: "question 2",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
                {
                  id: uuid(),
                  question: "question 3",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
              ],
            },
            category2: {
              id: uuid(),
              quizData: [
                {
                  id: uuid(),
                  question: "question 1",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
                {
                  id: uuid(),
                  question: "question 2",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
                {
                  id: uuid(),
                  question: "question 3",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
              ],
            },
            category3: {
              id: uuid(),
              quizData: [
                {
                  id: uuid(),
                  question: "question 1",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
                {
                  id: uuid(),
                  question: "question 2",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
                {
                  id: uuid(),
                  question: "question 3",
                  option1: "option1",
                  option2: "option2",
                  option3: "option3",
                  answer: "answer",
                },
              ],
            },
          },
        };
      });
    },
  },
  {timing: 4000}
);
