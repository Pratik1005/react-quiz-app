const quizReducer = (state, action) => {
  switch (action.type) {
    case "QUIZ_DATA":
      return {
        ...state,
        quizData: action.payload,
      };
    case "INCREASE_SCORE":
      return {
        ...state,
        totalScore: state.totalScore + 20,
      };
    case "USER_SELECTED_OPTION":
      return {
        ...state,
        userSelectedOptions: [...state.userSelectedOptions, action.payload],
      };
    case "RESET":
      return {
        totalScore: 0,
        userSelectedOptions: [],
        quizData: [],
      };
    default:
      return state;
  }
};

export {quizReducer};
