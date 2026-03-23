export default function FeedbackCard({ isCorrect, correctAnswer, explanation, onNext }) {
  return (
    <div style={{
      marginTop: 'clamp(16px, 4vw, 24px)',
      padding: 'clamp(16px, 4vw, 24px)',
      background: isCorrect ? '#ecfdf5' : '#fef2f2',
      borderRadius: '12px',
      border: `2px solid ${isCorrect ? '#10b981' : '#ef4444'}`
    }}>
      <h3 style={{
        color: isCorrect ? '#059669' : '#dc2626',
        marginBottom: 'clamp(12px, 3vw, 16px)',
        fontSize: 'clamp(17px, 4vw, 20px)',
        fontWeight: '600'
      }}>
        {isCorrect ? '✓ Correct Answer' : '✗ Incorrect Answer'}
      </h3>
      {!isCorrect && (
        <p style={{
          fontSize: 'clamp(14px, 3.5vw, 16px)',
          marginBottom: 'clamp(10px, 2.5vw, 12px)',
          color: '#1a202c',
          fontWeight: '600'
        }}>
          Correct answer: {correctAnswer}
        </p>
      )}
      <p style={{
        fontSize: 'clamp(14px, 3.5vw, 15px)',
        lineHeight: '1.7',
        color: '#4a5568',
        marginBottom: 'clamp(16px, 4vw, 20px)'
      }}>
        {explanation}
      </p>
      <button
        onClick={onNext}
        style={{
          width: '100%',
          background: isCorrect ? '#10b981' : '#3b82f6',
          color: 'white',
          fontSize: '16px'
        }}
      >
        Continue
      </button>
    </div>
  );
}
