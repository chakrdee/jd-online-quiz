import { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';
import TimerBar from './TimerBar.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import FeedbackCard from './FeedbackCard.jsx';
import { useQuestionTimer } from '../hooks/useQuestionTimer.js';
import { QUESTION_TIMER } from '../data/questions.js';

export default function QuizScreen({
  question,
  questionIndex,
  totalQuestions,
  score,
  difficulty,
  onAnswer,
  onNext,
  onTimeout,
  showingFeedback,
  lastAnswer
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { percentage } = useQuestionTimer(
    QUESTION_TIMER,
    !showingFeedback,
    onTimeout
  );

  const handleAnswer = (answer) => {
    if (showingFeedback) return;
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    onNext();
  };

  return (
    <div className="card">
      <ProgressBar current={questionIndex + 1} total={totalQuestions} />
      <ScoreBoard score={score} difficulty={difficulty} />
      {!showingFeedback && <TimerBar percentage={percentage} />}
      <h2 style={{
        fontSize: '24px',
        marginBottom: '30px',
        color: '#333',
        lineHeight: '1.4'
      }}>
        {question.question}
      </h2>
      <div style={{
        display: 'grid',
        gap: '15px'
      }}>
        {question.options.map((option, idx) => {
          let buttonStyle = {
            background: '#f3f4f6',
            color: '#333',
            textAlign: 'left',
            width: '100%',
            fontSize: '16px'
          };

          if (showingFeedback) {
            if (option === question.answer) {
              buttonStyle = { ...buttonStyle, background: '#10b981', color: 'white' };
            } else if (option === selectedAnswer && !lastAnswer?.isCorrect) {
              buttonStyle = { ...buttonStyle, background: '#ef4444', color: 'white' };
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              disabled={showingFeedback}
              style={buttonStyle}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showingFeedback && lastAnswer && (
        <FeedbackCard
          isCorrect={lastAnswer.isCorrect}
          correctAnswer={question.answer}
          explanation={question.explanation}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
