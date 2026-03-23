export const ACTIONS = {
  START_QUIZ: 'START_QUIZ',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  NEXT_QUESTION: 'NEXT_QUESTION',
  TIMEOUT: 'TIMEOUT',
  RESTART: 'RESTART'
};

export const initialState = {
  screen: 'start',
  currentQuestion: null,
  score: 0,
  questionIndex: 0,
  totalQuestions: 10,
  usedQuestionIds: [],
  difficulty: 1,
  consecutiveCorrect: 0,
  lastAnswer: null,
  showingFeedback: false
};

export const quizReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.START_QUIZ:
      return {
        ...initialState,
        screen: 'quiz',
        currentQuestion: action.question,
        totalQuestions: action.totalQuestions
      };
    case ACTIONS.ANSWER_QUESTION:
      return {
        ...state,
        lastAnswer: action.answer,
        showingFeedback: true,
        score: action.isCorrect ? state.score + action.points : state.score,
        consecutiveCorrect: action.isCorrect ? state.consecutiveCorrect + 1 : 0
      };
    case ACTIONS.NEXT_QUESTION:
      if (state.questionIndex + 1 >= state.totalQuestions) {
        return {
          ...state,
          screen: 'results',
          showingFeedback: false
        };
      }
      return {
        ...state,
        currentQuestion: action.question,
        questionIndex: state.questionIndex + 1,
        usedQuestionIds: [...state.usedQuestionIds, state.currentQuestion.id],
        difficulty: action.newDifficulty,
        lastAnswer: null,
        showingFeedback: false
      };
    case ACTIONS.TIMEOUT:
      return {
        ...state,
        lastAnswer: { isCorrect: false, selectedAnswer: null },
        showingFeedback: true,
        consecutiveCorrect: 0
      };
    case ACTIONS.RESTART:
      return initialState;
    default:
      return state;
  }
};
