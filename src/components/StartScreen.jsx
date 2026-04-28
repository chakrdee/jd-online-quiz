import { useState } from 'react';
import { SUBJECTS } from '../config/subjects.js';

export default function StartScreen({ onStart }) {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Collect all available topics from all subjects
  const allTopics = Object.values(SUBJECTS).flatMap(subject =>
    Object.values(subject.topics).map(topic => ({
      ...topic,
      subjectName: subject.name,
      subjectIcon: subject.icon
    }))
  );

  const handleStart = () => {
    if (selectedTopic) {
      onStart(selectedTopic.questionSet);
    }
  };

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
        BrainBurst Quiz
      </h1>
      <p style={{fontSize: 'clamp(15px, 4vw, 18px)', color: '#4a5568', marginBottom: 'clamp(24px, 6vw, 32px)', lineHeight: '1.6', padding: '0 8px'}}>
        Choose a topic and test your knowledge!
      </p>

      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: 'clamp(24px, 6vw, 32px)',
        maxWidth: '400px',
        margin: '0 auto 24px'
      }}>
        {allTopics.map(topic => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            style={{
              background: selectedTopic?.id === topic.id
                ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                : '#ffffff',
              color: selectedTopic?.id === topic.id ? 'white' : '#2d3748',
              border: selectedTopic?.id === topic.id ? '2px solid #1d4ed8' : '2px solid #e2e8f0',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              padding: '16px',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.2s',
              fontWeight: '500'
            }}
          >
            <span style={{fontSize: '24px'}}>{topic.icon}</span>
            <div style={{flex: 1}}>
              <div style={{fontWeight: '600'}}>{topic.name}</div>
              <div style={{
                fontSize: '12px',
                opacity: 0.8,
                marginTop: '2px'
              }}>
                {topic.subjectIcon} {topic.subjectName}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={handleStart}
        disabled={!selectedTopic}
        style={{
          background: selectedTopic
            ? 'linear-gradient(135deg, #10b981, #059669)'
            : '#cbd5e0',
          color: 'white',
          fontSize: 'clamp(16px, 4vw, 18px)',
          padding: 'clamp(14px, 4vw, 18px) clamp(28px, 8vw, 40px)',
          width: '100%',
          maxWidth: '300px',
          cursor: selectedTopic ? 'pointer' : 'not-allowed',
          opacity: selectedTopic ? 1 : 0.6
        }}
      >
        Begin Quiz
      </button>
    </div>
  );
}
