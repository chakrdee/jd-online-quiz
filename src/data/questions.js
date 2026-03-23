/**
 * Question Configuration and Registry
 * This file manages all questions across different subjects/topics
 * To add new subjects/topics:
 * 1. Create a new file in /data/ (e.g., chemistry.js, math.js)
 * 2. Import and add to questionSets below
 * 3. Update subjects.js configuration
 */

import { cellBiologyQuestions } from './cell-biology.js';
import { DEFAULT_TOPIC } from '../config/subjects.js';

// Timer configuration (in milliseconds)
export const QUESTION_TIMER = 7000;

// Question registry - add new question sets here
export const questionSets = {
  'cell-biology': cellBiologyQuestions,
  // Add more question sets as you scale:
  // 'chemistry': chemistryQuestions,
  // 'algebra': algebraQuestions,
  // 'world-history': worldHistoryQuestions,
};

// Get questions for current topic (currently defaults to cell biology)
// In the future, this will be dynamic based on user selection
export const questions = questionSets[DEFAULT_TOPIC.questionSet] || cellBiologyQuestions;
