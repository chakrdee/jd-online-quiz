export default function StartScreen({ onStart }) {
  return (
    <div className="card" style={{textAlign: 'center'}}>
      <div style={{fontSize: '80px', marginBottom: '20px'}}>🔬</div>
      <h1 style={{
        fontSize: '48px',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px'
      }}>
        Cell Quest
      </h1>
      <p style={{fontSize: '20px', color: '#666', marginBottom: '40px'}}>
        Test your knowledge about plant and animal cells! Answer correctly and fast to earn more points. The quiz gets harder as you improve!
      </p>
      <button
        onClick={onStart}
        style={{
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          color: 'white',
          fontSize: '24px'
        }}
      >
        🚀 Start Quiz
      </button>
    </div>
  );
}
