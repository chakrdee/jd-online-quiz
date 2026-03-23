export const getNextDifficulty = (currentDifficulty, consecutiveCorrect) => {
  if (consecutiveCorrect >= 3 && currentDifficulty < 5) {
    return currentDifficulty + 1;
  }
  return currentDifficulty;
};

export const getQuestionsByDifficulty = (questions, difficulty) => {
  return questions.filter(q => q.difficulty === difficulty);
};

export const selectNextQuestion = (questions, usedIds, difficulty) => {
  const availableQuestions = questions.filter(
    q => q.difficulty === difficulty && !usedIds.includes(q.id)
  );
  if (availableQuestions.length === 0) {
    const fallbackQuestions = questions.filter(q => !usedIds.includes(q.id));
    if (fallbackQuestions.length === 0) return null;
    return fallbackQuestions[Math.floor(Math.random() * fallbackQuestions.length)];
  }
  return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
};
