export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  
  return (
    <div style={{marginBottom: '20px'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#666'
      }}>
        <span>Question {current} of {total}</span>
      </div>
      <div style={{
        height: '8px',
        background: '#e5e7eb',
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${percentage}%`,
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          transition: 'width 0.3s ease'
        }} />
      </div>
    </div>
  );
}
