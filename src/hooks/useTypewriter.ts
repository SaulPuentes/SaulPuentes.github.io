import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export const useTypewriter = ({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000
}: UseTypewriterOptions) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const currentPhrase = phrases[phraseIndex];
  
  useEffect(() => {
    if (!isDeleting && currentIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (currentIndex === currentPhrase.length && !isDeleting) {
      // Pause at the end before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    } else if (currentIndex === 0 && isDeleting) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }
  }, [currentIndex, isDeleting, currentPhrase, phraseIndex, phrases.length, typingSpeed, deletingSpeed, pauseTime]);

  return {
    text,
    isDeleting,
    currentPhrase: currentPhrase,
    phraseIndex,
    reset: () => {
      setText('');
      setCurrentIndex(0);
      setPhraseIndex(0);
      setIsDeleting(false);
    }
  };
};
