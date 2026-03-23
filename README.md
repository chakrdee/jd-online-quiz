# Cell Quest - Interactive Kids Science Quiz

An engaging, adaptive quiz application for kids to learn about cell biology. Built with React and Vite for optimal performance and deployed on Netlify.

## Features

✨ **Adaptive Difficulty** - Questions get harder as kids answer correctly
⏱️ **Timed Questions** - 5-second timer per question (configurable)
🎯 **Smart Scoring** - Points based on difficulty and speed
🎨 **Kid-Friendly Design** - Colorful, engaging interface with animations
📚 **Educational Feedback** - Explanations for wrong answers
🔀 **Randomized Options** - Answer positions shuffle to prevent patterns
🏆 **Progress Tracking** - Visual progress and score indicators

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

- **Timer Duration**: Edit `QUESTION_TIMER` in `src/data/questions.js` (in milliseconds)
- **Total Questions**: Default is 10, configurable in App.jsx `handleStart()`
- **Difficulty Levels**: 1-5, with adaptive progression every 3 correct answers

## Project Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Main app component
├── styles/
│   └── global.css             # Global styles & animations
├── data/
│   └── questions.js           # Question bank with difficulty levels
├── utils/
│   ├── shuffle.js             # Answer randomization
│   ├── scoring.js             # Score calculation & messages
│   └── difficulty.js          # Adaptive difficulty logic
├── hooks/
│   └── useQuestionTimer.js    # Custom timer hook
├── features/
│   ├── quiz/
│   │   ├── quizReducer.js     # State management
│   │   └── quizEngine.js      # Quiz logic engine
│   └── results/
│       └── ResultsView.jsx    # Results screen
└── components/
    ├── StartScreen.jsx        # Welcome screen
    ├── QuizScreen.jsx         # Main quiz interface
    ├── ProgressBar.jsx        # Question progress
    ├── TimerBar.jsx           # Visual timer
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
- Fast interactive timer (100ms updates)

## Deployment

Automatically deploys to Netlify when pushed to main branch. Configuration in `netlify.toml`.

## Adding Questions

Add new questions to `src/data/questions.js` with:
- `id`: Unique identifier
- `difficulty`: 1-5
- `question`: Question text
- `options`: Array of 4 options
- `answer`: Correct answer (must match an option)
- `explanation`: Educational explanation

## License

MIT
