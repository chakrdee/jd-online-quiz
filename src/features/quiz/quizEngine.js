import { questions } from '../../data/questions.js';
import { selectNextQuestion, getNextDifficulty } from '../../utils/difficulty.js';
import { shuffleOptions } from '../../utils/shuffle.js';
import { calculateScore } from '../../utils/scoring.js';
import { QUESTION_TIMER } from '../../data/questions.js';

export class QuizEngine {
  static getFirstQuestion() {
    const firstQuestion = selectNextQuestion(questions, [], 1);
    return shuffleOptions(firstQuestion);
  }

  static getNextQuestion(usedIds, difficulty) {
    const question = selectNextQuestion(questions, usedIds, difficulty);
    return question ? shuffleOptions(question) : null;
  }

  static checkAnswer(selectedAnswer, correctAnswer) {
    const isCorrect = selectedAnswer === correctAnswer;
    const points = calculateScore(isCorrect);
    return { isCorrect, points };
  }

  static calculateNextDifficulty(currentDifficulty, consecutiveCorrect) {
    return getNextDifficulty(currentDifficulty, consecutiveCorrect);
  }
}
