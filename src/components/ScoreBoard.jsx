export default function ScoreBoard({ score, difficulty }) {
  const stars = '⭐'.repeat(Math.min(difficulty, 5));
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      padding: '15px',
      background: 'linear-gradient(135deg, #667eea22, #764ba222)',
      borderRadius: '10px'
    }}>
      <div>
        <div style={{fontSize: '14px', color: '#666', marginBottom: '4px'}}>Score</div>
        <div style={{fontSize: '24px', fontWeight: 'bold', color: '#667eea'}}>{score}</div>
      </div>
      <div style={{textAlign: 'right'}}>
        <div style={{fontSize: '14px', color: '#666', marginBottom: '4px'}}>Difficulty</div>
        <div style={{fontSize: '20px'}}>{stars}</div>
      </div>
    </div>
  );
}
