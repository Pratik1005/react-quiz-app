const quizReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_SCORE":
      return {
        ...state,
        totalScore: action.payload,
      };
    default:
      return state;
  }
};

export {quizReducer};
