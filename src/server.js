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
              categoryImg: "https://assetpoint.netlify.app/images/stock.jpg",
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
                {
                  id: uuid(),
                  quizTitle: "Advance Stock Market",
                  quizData: [
                    {
                      id: uuid(),
                      question: "What is Face Value?",
                      options: [
                        {
                          option: "Original Price of the share",
                          isCorrect: true,
                        },
                        {
                          option: "Current Price of the share",
                          isCorrect: false,
                        },
                        {option: "Future Price of the share", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "What Top Line means in Financial Analysis?",
                      options: [
                        {option: "Profit", isCorrect: false},
                        {option: "Turnover", isCorrect: true},
                        {option: "Loss", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "What Bottom Line means in Financial Analysis?",
                      options: [
                        {option: "Loss", isCorrect: false},
                        {option: "Profit after tax", isCorrect: true},
                        {option: "Loss after tax", isCorrect: false},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "What is Stock Split?",
                      options: [
                        {
                          option: "Spliting current share price",
                          isCorrect: false,
                        },
                        {option: "Spliting company profit", isCorrect: false},
                        {option: "Spliting face value", isCorrect: true},
                      ],
                    },
                    {
                      id: uuid(),
                      question: "Dividend is tax free upto?",
                      options: [
                        {option: "1 Lac", isCorrect: false},
                        {option: "5 Lac", isCorrect: false},
                        {option: "10 Lac", isCorrect: true},
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              categoryName: "Real Estate",
              categoryImg:
                "https://assetpoint.netlify.app/images/real-estate.jpg",
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
