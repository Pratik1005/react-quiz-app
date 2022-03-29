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
                      question: "What is the full form LTCG?",
                      option1: "Long term Capital Gain",
                      option2: "Legal Term Capital Gain",
                      option3: "Long Term Capital Gross",
                      answer: "Long term Capital Gain",
                    },
                    {
                      id: uuid(),
                      question: "DeMat account is used to store?",
                      option1: "Money",
                      option2: "Shares",
                      option3: "Digital Gold",
                      answer: "Shares",
                    },
                    {
                      id: uuid(),
                      question: "BSE was established before NSE?",
                      option1: "True",
                      option2: "False",
                      option3: "",
                      answer: "True",
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
                  quizTitle: "Basics of Real Estate",
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
                  quizTitle: "Basics of Finance",
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
