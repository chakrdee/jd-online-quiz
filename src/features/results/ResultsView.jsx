import { getScoreMessage } from '../../utils/scoring.js';

export default function ResultsView({ score, totalQuestions, onRestart }) {
  const { emoji, text } = getScoreMessage(score, totalQuestions);
  
  return (
    <div className="card" style={{textAlign: 'center'}}>
      <div style={{fontSize: '80px', marginBottom: '20px'}}>{emoji}</div>
      <h1 style={{color: '#667eea', marginBottom: '10px'}}>Quiz Complete!</h1>
      <h2 style={{marginBottom: '30px'}}>{text}</h2>
      <div style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        Your Score: {score} points
      </div>
      <button
        onClick={onRestart}
        style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          fontSize: '20px'
        }}
      >
        🔄 Try Again
      </button>
    </div>
  );
}
