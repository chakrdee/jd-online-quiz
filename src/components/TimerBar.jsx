export default function TimerBar({ percentage }) {
  const getColor = () => {
    if (percentage > 50) return '#10b981';
    if (percentage > 25) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={{
      height: '6px',
      background: '#e5e7eb',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '20px'
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
