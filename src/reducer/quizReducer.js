const quizReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE_SCORE":
      return {
        ...state,
        totalScore: state.totalScore + 1,
      };
    default:
      return state;
  }
};

export {quizReducer};
