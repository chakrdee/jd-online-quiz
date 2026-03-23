export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div style={{marginBottom: 'clamp(16px, 4vw, 24px)'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        fontSize: 'clamp(12px, 3vw, 14px)',
        fontWeight: '600',
        color: '#64748b'
      }}>
        <span>Question {current} of {total}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div style={{
        height: '6px',
        background: '#e2e8f0',
        borderRadius: '3px',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${percentage}%`,
          background: 'linear-gradient(90deg, #3b82f6, #1d4ed8)',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }} />
      </div>
    </div>
  );
}
