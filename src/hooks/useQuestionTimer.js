import { useState, useEffect, useRef, useCallback } from 'react';

const TIMER_DELAY = 2000; // 2 second delay before timer starts

export const useQuestionTimer = (duration, isActive, onTimeout) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [isDelaying, setIsDelaying] = useState(true);
  const onTimeoutRef = useRef(onTimeout);
  const hasTimedOut = useRef(false);

  // Keep onTimeout ref up to date
  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  }, [onTimeout]);

  // Reset everything when duration changes (new question)
  useEffect(() => {
    setTimeRemaining(duration);
    setIsDelaying(true);
    hasTimedOut.current = false;
  }, [duration]);

  // Handle the delay and countdown
  useEffect(() => {
    if (!isActive || hasTimedOut.current) return;

    // Initial delay before timer starts
    if (isDelaying) {
      const delayTimeout = setTimeout(() => {
        setIsDelaying(false);
      }, TIMER_DELAY);
      return () => clearTimeout(delayTimeout);
    }

    // Start countdown after delay
    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 100) {
          clearInterval(interval);
          if (!hasTimedOut.current) {
            hasTimedOut.current = true;
            onTimeoutRef.current?.();
          }
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, isDelaying, duration]); // Added duration to dependencies

  return { timeRemaining, percentage: isDelaying ? 100 : (timeRemaining / duration) * 100 };
};
