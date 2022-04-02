import {QUIZ_ACTIONS} from "../utils/constant";

const quizReducer = (state, action) => {
  switch (action.type) {
    case QUIZ_ACTIONS.INITIALIZE_QUIZ_DATA:
      return {
        ...state,
        quizData: action.payload,
      };
    case QUIZ_ACTIONS.INCREASE_SCORE:
      return {
        ...state,
        totalScore: state.totalScore + 20,
      };
    case QUIZ_ACTIONS.SET_USER_SELECTED_OPTION:
      return {
        ...state,
        userSelectedOptions: [...state.userSelectedOptions, action.payload],
      };
    case QUIZ_ACTIONS.RESET_QUIZ_STATE:
      return {
        totalScore: 0,
        userSelectedOptions: [],
        quizData: [],
        quizBoardData: [],
      };
    case QUIZ_ACTIONS.ADD_SCORE_TO_QUIZBOARD:
      console.log("add score", action.payload);
      return {
        ...state,
        quizBoardData: [...state.quizBoardData, action.payload],
      };
    default:
      return state;
  }
};

export {quizReducer};
