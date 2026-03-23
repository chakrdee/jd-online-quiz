import { getScoreMessage } from '../../utils/scoring.js';

export default function ResultsView({ score, totalQuestions, onRestart }) {
  const { emoji, text } = getScoreMessage(score, totalQuestions);
  const percentage = Math.round((score / (totalQuestions * 30)) * 100);

  return (
    <div className="card" style={{textAlign: 'center'}}>
      <div style={{
        width: 'clamp(96px, 25vw, 120px)',
        height: 'clamp(96px, 25vw, 120px)',
        margin: '0 auto 20px',
        background: percentage >= 75 ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(36px, 10vw, 56px)',
        color: 'white',
        fontWeight: 'bold',
        boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }}>{percentage}%</div>
      <h1 style={{color: '#1a202c', fontSize: 'clamp(28px, 7vw, 36px)', fontWeight: '700', marginBottom: '12px'}}>Quiz Complete</h1>
      <h2 style={{marginBottom: 'clamp(24px, 6vw, 32px)', color: '#4a5568', fontSize: 'clamp(16px, 4vw, 20px)', fontWeight: '500', padding: '0 8px'}}>{text}</h2>
      <div style={{
        background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
        color: '#1e40af',
        padding: 'clamp(20px, 5vw, 32px)',
        borderRadius: '12px',
        marginBottom: 'clamp(20px, 5vw, 32px)',
        border: '2px solid #bfdbfe'
      }}>
        <div style={{fontSize: 'clamp(14px, 3.5vw, 16px)', fontWeight: '600', marginBottom: '8px', color: '#64748b'}}>Final Score</div>
        <div style={{fontSize: 'clamp(36px, 10vw, 48px)', fontWeight: '700'}}>{score}</div>
        <div style={{fontSize: 'clamp(12px, 3vw, 14px)', marginTop: '8px', color: '#64748b'}}>out of {totalQuestions * 50} possible points</div>
      </div>
      <button
        onClick={onRestart}
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white',
          fontSize: 'clamp(15px, 4vw, 16px)',
          padding: 'clamp(14px, 4vw, 16px) clamp(24px, 6vw, 32px)',
          width: '100%',
          maxWidth: '300px'
        }}
      >
        Take Quiz Again
      </button>
    </div>
  );
}
