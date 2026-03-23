export default function TimerBar({ percentage }) {
  const getColor = () => {
    if (percentage > 50) return '#10b981';
    if (percentage > 25) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{
      height: '4px',
      background: '#e2e8f0',
      borderRadius: '2px',
      overflow: 'hidden',
      marginBottom: 'clamp(16px, 4vw, 24px)'
    }}>
      <div style={{
        height: '100%',
        width: `${percentage}%`,
        background: getColor(),
        transition: 'width 0.1s linear, background 0.3s ease'
      }} />
    </div>
  );
}
