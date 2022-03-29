import {createServer} from "miragejs";
import {v4 as uuid} from "uuid";
createServer(
  {
    routes() {
      this.namespace = "api";

      this.get("/quiz", () => {
        return {
          quiz: [
            {
              id: 1,
              categoryName: "Stock Investment",
              categoryImg: "https://assetpoint.netlify.app/images/general.jpg",
              allQuiz: [
                {
                  id: uuid(),
                  quizTitle: "Basics of Stock Market",
                  quizData: [
                    {
                      id: uuid(),
                      question: "Question1",
                      option1: "a",
                      option2: "b",
                      option3: "c",
                      option4: "d",
                      answer: "a",
                    },
                    {
                      id: uuid(),
                      question: "Question2",
                      option1: "a",
                      option2: "b",
                      option3: "c",
                      option4: "d",
                      answer: "b",
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              categoryName: "Real Estate",
              categoryImg: "https://assetpoint.netlify.app/images/general.jpg",
              allQuiz: [
                {
                  id: uuid(),
                  quizTitle: "Basics of Stock Market",
                  quizData: [
                    {
                      id: uuid(),
                      question: "Question1",
                      option1: "a",
                      option2: "b",
                      option3: "c",
                      option4: "d",
                      answer: "a",
                    },
                    {
                      id: uuid(),
                      question: "Question2",
                      option1: "a",
                      option2: "b",
                      option3: "c",
                      option4: "d",
                      answer: "b",
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              categoryName: "Finance",
              categoryImg: "https://assetpoint.netlify.app/images/general.jpg",
              allQuiz: [
                {
                  id: uuid(),
                  quizTitle: "Basics of Stock Market",
                  quizData: [
                    {
                      id: uuid(),
                      question: "Question1",
                      option1: "a",
                      option2: "b",
                      option3: "c",
                      option4: "d",
                      answer: "a",
                    },
                    {
                      id: uuid(),
                      question: "Question2",
                      option1: "a",
                      option2: "b",
                      option3: "c",
                      option4: "d",
                      answer: "b",
                    },
                  ],
                },
              ],
            },
          ],
        };
      });
    },
  },
  {timing: 4000}
);
