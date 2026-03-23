export default function FeedbackCard({ isCorrect, correctAnswer, explanation, onNext }) {
  return (
    <div style={{
      marginTop: '20px',
      padding: '20px',
      background: isCorrect ? '#d1fae5' : '#fee2e2',
      borderRadius: '12px',
      border: `3px solid ${isCorrect ? '#10b981' : '#ef4444'}`
    }}>
      <div style={{
        fontSize: '48px',
        textAlign: 'center',
        marginBottom: '15px'
      }}>
        {isCorrect ? '🎉' : '📚'}
      </div>
      <h3 style={{
        color: isCorrect ? '#059669' : '#dc2626',
        textAlign: 'center',
        marginBottom: '15px',
        fontSize: '24px'
      }}>
        {isCorrect ? 'Correct!' : 'Not quite!'}
      </h3>
      {!isCorrect && (
        <p style={{
          fontSize: '16px',
          marginBottom: '10px',
          color: '#333',
          fontWeight: 'bold'
        }}>
          The correct answer is: {correctAnswer}
        </p>
      )}
      <p style={{
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#333',
        marginBottom: '20px'
      }}>
        {explanation}
      </p>
      <button
        onClick={onNext}
        style={{
          width: '100%',
          background: isCorrect ? '#10b981' : '#ef4444',
          color: 'white',
          fontSize: '18px'
        }}
      >
        Next Question ➡️
      </button>
    </div>
  );
}
