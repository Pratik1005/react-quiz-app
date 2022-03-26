import {createServer} from "miragejs";
import {v4 as uuid} from "uuid";
createServer({
  routes() {
    this.namespace = "api";

    this.get("/quiz", () => {
      return {
        quiz: {
          featuredCategories: [
            {
              id: uuid(),
              imgSrc: "",
              title: "stock1",
            },
            {
              id: uuid(),
              imgSrc: "",
              title: "stock2",
            },
            {
              id: uuid(),
              imgSrc: "",
              title: "stock3",
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
});
