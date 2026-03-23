export default function ScoreBoard({ score, difficulty }) {
  const difficultyLabels = ['Beginner', 'Easy', 'Medium', 'Hard', 'Expert'];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 'clamp(16px, 4vw, 24px)',
      padding: 'clamp(16px, 4vw, 20px)',
      background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
      borderRadius: '12px',
      border: '1px solid #bae6fd',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
      <div>
        <div style={{fontSize: 'clamp(11px, 2.8vw, 13px)', color: '#64748b', marginBottom: '6px', fontWeight: '600'}}>Score</div>
        <div style={{fontSize: 'clamp(24px, 6vw, 28px)', fontWeight: '700', color: '#1e40af'}}>{score}</div>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontSize: 'clamp(11px, 2.8vw, 13px)', color: '#64748b', marginBottom: '6px', fontWeight: '600'}}>Level</div>
        <div style={{
          fontSize: 'clamp(12px, 3vw, 14px)',
          fontWeight: '600',
          color: '#1e40af',
          background: '#dbeafe',
          padding: 'clamp(5px, 1.5vw, 6px) clamp(10px, 2.5vw, 12px)',
          borderRadius: '6px',
          whiteSpace: 'nowrap'
        }}>{difficultyLabels[difficulty - 1]}</div>
      </div>
    </div>
  );
}
