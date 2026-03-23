import { useState, useEffect } from 'react';
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

  // Reset selectedAnswer when question changes
  useEffect(() => {
    setSelectedAnswer(null);
  }, [question.id]);

  // Auto-advance on correct answer after showing brief feedback
  useEffect(() => {
    if (showingFeedback && lastAnswer?.isCorrect) {
      const timer = setTimeout(() => {
        onNext();
      }, 1000); // 1 second delay to show correct answer highlighted
      return () => clearTimeout(timer);
    }
  }, [showingFeedback, lastAnswer, onNext]);
  const { percentage, timeRemaining } = useQuestionTimer(
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
        fontSize: 'clamp(18px, 4.5vw, 22px)',
        fontWeight: '600',
        marginBottom: 'clamp(24px, 6vw, 32px)',
        color: '#1a202c',
        lineHeight: '1.5'
      }}>
        {question.question}
      </h2>
      <div style={{
        display: 'grid',
        gap: 'clamp(10px, 2.5vw, 12px)'
      }}>
        {question.options.map((option, idx) => {
          let buttonStyle = {
            background: '#ffffff',
            color: '#2d3748',
            textAlign: 'left',
            width: '100%',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            border: '2px solid #e2e8f0',
            fontWeight: '500',
            minHeight: '52px',
            padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)'
          };

          if (showingFeedback) {
            if (option === question.answer) {
              buttonStyle = { ...buttonStyle, background: '#10b981', color: 'white', border: '2px solid #059669' };
            } else if (option === selectedAnswer && !lastAnswer?.isCorrect) {
              buttonStyle = { ...buttonStyle, background: '#ef4444', color: 'white', border: '2px solid #dc2626' };
            }
          } else if (selectedAnswer === option) {
            buttonStyle = { ...buttonStyle, background: '#f0f9ff', border: '2px solid #3b82f6' };
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
      {showingFeedback && lastAnswer && !lastAnswer.isCorrect && (
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
