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
                      options: [
                        {
                          option: "Long Term Capital Gain",
                          isCorrect: true,
                        },
                        {option: "Legal Term Capital Gain", isCorrect: false},
                        {option: "Long Term Capital Gross", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "DeMat account is used to store?",
                      options: [
                        {option: "Money", isCorrect: false},
                        {option: "Shares", isCorrect: true},
                        {option: "Digital Gold", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "BSE was established before NSE?",
                      options: [
                        {option: "True", isCorrect: true},
                        {option: "False", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "Return on investment in shares is called?",
                      options: [
                        {option: "Capital", isCorrect: false},
                        {option: "Dividend", isCorrect: true},
                        {option: "Remainder", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question:
                        "Free shares issued by the company to the investors is called?",
                      options: [
                        {option: "Bonds", isCorrect: false},
                        {option: "Derivatives", isCorrect: false},
                        {option: "Bonus", isCorrect: true},
                      ],
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
