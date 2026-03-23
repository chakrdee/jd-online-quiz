// Simple scoring: 1 point for correct answer, 0 for wrong answer
export const calculateScore = (isCorrect) => {
  return isCorrect ? 1 : 0;
};

export const getScoreMessage = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 90) return { emoji: '🌟', text: 'Amazing! Outstanding Performance!' };
  if (percentage >= 75) return { emoji: '🎉', text: 'Great Job! Keep it up!' };
  if (percentage >= 60) return { emoji: '👍', text: 'Good Work! Practice more!' };
  if (percentage >= 40) return { emoji: '💪', text: 'Nice Try! Keep Learning!' };
  return { emoji: '📚', text: 'Keep Practicing! You Can Do It!' };
};
