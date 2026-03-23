import { useReducer } from 'react';
import StartScreen from './components/StartScreen.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import ResultsView from './features/results/ResultsView.jsx';
import { quizReducer, initialState, ACTIONS } from './features/quiz/quizReducer.js';
import { QuizEngine } from './features/quiz/quizEngine.js';
import { QUESTION_TIMER } from './data/questions.js';

export default function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleStart = () => {
    const firstQuestion = QuizEngine.getFirstQuestion();
    dispatch({
      type: ACTIONS.START_QUIZ,
      question: firstQuestion,
      totalQuestions: 10
    });
  };

  const handleAnswer = (selectedAnswer) => {
    const { isCorrect, points } = QuizEngine.checkAnswer(
      selectedAnswer,
      state.currentQuestion.answer,
      state.difficulty,
      QUESTION_TIMER
    );
    
    dispatch({
      type: ACTIONS.ANSWER_QUESTION,
      answer: { isCorrect, selectedAnswer },
      points
    });
  };

  const handleNext = () => {
    const newDifficulty = QuizEngine.calculateNextDifficulty(
      state.difficulty,
      state.consecutiveCorrect
    );
    
    const nextQuestion = QuizEngine.getNextQuestion(
      [...state.usedQuestionIds, state.currentQuestion.id],
      newDifficulty
    );
    
    dispatch({
      type: ACTIONS.NEXT_QUESTION,
      question: nextQuestion,
      newDifficulty
    });
  };

  const handleTimeout = () => {
    dispatch({ type: ACTIONS.TIMEOUT });
  };

  const handleRestart = () => {
    dispatch({ type: ACTIONS.RESTART });
  };

  return (
    <>
      {state.screen === 'start' && <StartScreen onStart={handleStart} />}
      {state.screen === 'quiz' && (
        <QuizScreen
          question={state.currentQuestion}
          questionIndex={state.questionIndex}
          totalQuestions={state.totalQuestions}
          score={state.score}
          difficulty={state.difficulty}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onTimeout={handleTimeout}
          showingFeedback={state.showingFeedback}
          lastAnswer={state.lastAnswer}
        />
      )}
      {state.screen === 'results' && (
        <ResultsView
          score={state.score}
          totalQuestions={state.totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}
