# BrainBurst Quiz - Interactive Learning Platform

An engaging, adaptive quiz application for learning across multiple subjects and topics. Built with React and Vite for optimal performance and deployed on Netlify.

## Features

✨ **Adaptive Difficulty** - Questions get harder as you answer correctly
🎯 **Topic Selection** - Choose between Cell Biology, GMAS ELA - 2 (5th Grade), and more
📊 **Smart Scoring** - Points based on difficulty level
🎨 **Modern Design** - Clean, engaging interface with smooth animations
📚 **Educational Feedback** - Explanations for incorrect answers
🔀 **Randomized Options** - Answer positions shuffle to prevent patterns
🏆 **Progress Tracking** - Visual progress and score indicators
🔧 **Scalable Architecture** - Ready to expand to multiple subjects, grades, and topics

## Quick Start

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Configuration

- **Topics/Subjects**: Add new topics in `src/config/subjects.js` and question files in `src/data/`
- **Total Questions**: Default is 10, configurable in App.jsx `handleStart()`
- **Difficulty Levels**: 1-3, with adaptive progression every 3 correct answers

## Project Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Main app component with topic selection
├── styles/
│   └── global.css             # Global styles & animations
├── config/
│   └── subjects.js            # Subject/topic configuration
├── data/
│   ├── questions.js           # Question registry
│   ├── cell-biology.js        # Cell Biology question set
│   └── ela-2.js               # GMAS ELA - 2 (5th Grade) question set
├── utils/
│   ├── shuffle.js             # Answer randomization
│   ├── scoring.js             # Score calculation & messages
│   └── difficulty.js          # Adaptive difficulty logic
├── features/
│   ├── quiz/
│   │   ├── quizReducer.js     # State management
│   │   └── quizEngine.js      # Quiz logic engine
│   └── results/
│       └── ResultsView.jsx    # Results screen
└── components/
    ├── StartScreen.jsx        # Welcome & topic selection screen
    ├── QuizScreen.jsx         # Main quiz interface
    ├── ProgressBar.jsx        # Question progress
    ├── ScoreBoard.jsx         # Score & difficulty display
    └── FeedbackCard.jsx       # Answer feedback
```

## Security

- CSP headers configured in netlify.toml
- X-Frame-Options, X-Content-Type-Options enabled
- Strict Referrer Policy
- No external dependencies beyond React

## Performance

- Code splitting with manual chunks
- Terser minification
- Optimized build output
- Responsive design with smooth animations

## Deployment

Automatically deploys to Netlify when pushed to main branch. Configuration in `netlify.toml`.

## Adding Questions

To add a new topic:

1. Create a new file in `src/data/` (e.g., `chemistry.js`)
2. Export questions array with this format:
   - `id`: Unique identifier
   - `difficulty`: 1-3
   - `question`: Question text
   - `options`: Array of 4 options
   - `answer`: Correct answer (must match an option)
   - `explanation`: Educational explanation

3. Import and register in `src/data/questions.js`:
   ```javascript
   import { chemistryQuestions } from './chemistry.js';
   export const questionSets = {
     'chemistry': chemistryQuestions,
     ...
   };
   ```

4. Add topic configuration in `src/config/subjects.js`

## License

MIT
