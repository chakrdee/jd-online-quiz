import { useReducer } from 'react';
import StartScreen from './components/StartScreen.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import ResultsView from './features/results/ResultsView.jsx';
import { quizReducer, initialState, ACTIONS } from './features/quiz/quizReducer.js';
import { QuizEngine } from './features/quiz/quizEngine.js';

export default function App() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleStart = (questionSetId) => {
    const firstQuestion = QuizEngine.getFirstQuestion(questionSetId);
    dispatch({
      type: ACTIONS.START_QUIZ,
      question: firstQuestion,
      questionSetId: questionSetId,
      totalQuestions: 10
    });
  };

  const handleAnswer = (selectedAnswer) => {
    const { isCorrect, points } = QuizEngine.checkAnswer(
      selectedAnswer,
      state.currentQuestion.answer
    );

    dispatch({
      type: ACTIONS.ANSWER_QUESTION,
      answer: { isCorrect, selectedAnswer },
      isCorrect,
      points
    });
  };

  const handleNext = () => {
    const newDifficulty = QuizEngine.calculateNextDifficulty(
      state.difficulty,
      state.consecutiveCorrect
    );

    const nextQuestion = QuizEngine.getNextQuestion(
      state.questionSetId,
      [...state.usedQuestionIds, state.currentQuestion.id],
      newDifficulty
    );

    dispatch({
      type: ACTIONS.NEXT_QUESTION,
      question: nextQuestion,
      newDifficulty
    });
  };

  const handleRestart = () => {
    dispatch({ type: ACTIONS.RESTART });
  };

  return (
    <>
      {state.screen === 'start' && <StartScreen onStart={handleStart} />}
      {state.screen === 'quiz' && (
        <QuizScreen
          key={`${state.currentQuestion.id}-${state.questionIndex}`}
          question={state.currentQuestion}
          questionIndex={state.questionIndex}
          totalQuestions={state.totalQuestions}
          score={state.score}
          difficulty={state.difficulty}
          onAnswer={handleAnswer}
          onNext={handleNext}
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
