/**
 * Subject and Topic Configuration
 * Add new subjects, grades, and topics here as you expand
 */

export const SUBJECTS = {
  SCIENCE: {
    id: 'science',
    name: 'Science',
    icon: '🔬',
    grades: ['elementary', 'middle', 'high'],
    topics: {
      CELL_BIOLOGY: {
        id: 'cell-biology',
        name: 'Cell Biology',
        icon: '🧬',
        grade: 'elementary',
        questionSet: 'cell-biology' // corresponds to question file
      },
      // Add more science topics here
      // CHEMISTRY: {
      //   id: 'chemistry',
      //   name: 'Chemistry',
      //   icon: '⚗️',
      //   grade: 'middle',
      //   questionSet: 'chemistry'
      // }
    }
  },
  ELA: {
    id: 'ela',
    name: 'English Language Arts',
    icon: '📝',
    grades: ['elementary', 'middle', 'high'],
    topics: {
      ELA_2: {
        id: 'ela-2',
        name: 'ELA Grade 2',
        icon: '✍️',
        grade: 'elementary',
        questionSet: 'ela-2' // corresponds to question file
      }
      // Add more ELA topics here
    }
  },
  // Add more subjects here
  // MATH: {
  //   id: 'math',
  //   name: 'Mathematics',
  //   icon: '🔢',
  //   grades: ['elementary', 'middle', 'high'],
  //   topics: { ... }
  // },
  // HISTORY: {
  //   id: 'history',
  //   name: 'History',
  //   icon: '📚',
  //   grades: ['elementary', 'middle', 'high'],
  //   topics: { ... }
  // }
};

export const GRADES = {
  ELEMENTARY: {
    id: 'elementary',
    name: 'Elementary',
    level: 1
  },
  MIDDLE: {
    id: 'middle',
    name: 'Middle School',
    level: 2
  },
  HIGH: {
    id: 'high',
    name: 'High School',
    level: 3
  }
};

// Default topic (current cell biology questions)
export const DEFAULT_TOPIC = SUBJECTS.SCIENCE.topics.CELL_BIOLOGY;
