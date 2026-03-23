import { useState, useEffect } from 'react';

export const useQuestionTimer = (duration, isActive, onTimeout) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    setTimeRemaining(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 100) {
          clearInterval(interval);
          onTimeout?.();
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, onTimeout]);

  return { timeRemaining, percentage: (timeRemaining / duration) * 100 };
};
