export default function StartScreen({ onStart }) {
  return (
    <div className="card" style={{textAlign: 'center'}}>
      <div style={{
        width: 'clamp(72px, 20vw, 96px)',
        height: 'clamp(72px, 20vw, 96px)',
        margin: '0 auto 20px',
        background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
        borderRadius: 'clamp(16px, 5vw, 24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(32px, 10vw, 48px)',
        color: 'white',
        fontWeight: 'bold'
      }}>🎯</div>
      <h1 style={{
        fontSize: 'clamp(28px, 8vw, 42px)',
        fontWeight: '700',
        color: '#1a202c',
        marginBottom: '12px'
      }}>
        JD Quiz
      </h1>
      <p style={{fontSize: 'clamp(15px, 4vw, 18px)', color: '#4a5568', marginBottom: 'clamp(24px, 6vw, 40px)', lineHeight: '1.6', padding: '0 8px'}}>
        Test your knowledge and challenge yourself. Answer correctly and quickly to earn more points. The quiz adapts to your skill level!
      </p>
      <button
        onClick={onStart}
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white',
          fontSize: 'clamp(16px, 4vw, 18px)',
          padding: 'clamp(14px, 4vw, 18px) clamp(28px, 8vw, 40px)',
          width: '100%',
          maxWidth: '300px'
        }}
      >
        Begin Quiz
      </button>
    </div>
  );
}
