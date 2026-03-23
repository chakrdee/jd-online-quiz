const POINTS_PER_DIFFICULTY = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
  5: 50
};

export const calculateScore = (difficulty, timeRemaining, maxTime) => {
  const basePoints = POINTS_PER_DIFFICULTY[difficulty] || 10;
  const timeBonus = Math.floor((timeRemaining / maxTime) * basePoints * 0.5);
  return basePoints + timeBonus;
};

export const getScoreMessage = (score, totalQuestions) => {
  const percentage = (score / (totalQuestions * 30)) * 100;
  if (percentage >= 90) return { emoji: '🌟', text: 'Amazing! You are a Cell Expert!' };
  if (percentage >= 75) return { emoji: '🎉', text: 'Great Job! Keep it up!' };
  if (percentage >= 60) return { emoji: '👍', text: 'Good Work! Practice more!' };
  if (percentage >= 40) return { emoji: '💪', text: 'Nice Try! Keep Learning!' };
  return { emoji: '📚', text: 'Keep Studying! You Can Do It!' };
};
