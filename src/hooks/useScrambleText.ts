'use client';
import { useCallback, useEffect, useState } from 'react';

interface UseScrambleTextOptions {
  chars?: string;
  speed?: number;
  step?: number;
}

export const useScrambleText = (text: string, options: UseScrambleTextOptions = {}) => {
  const {
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    speed = 20,
    step = 1 / 3,
  } = options;

  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (!isScrambling) {
      setDisplayText(text);

      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }

            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += step;
    }, speed);

    return () => clearInterval(interval);
  }, [isScrambling, text, chars, speed, step]);

  const trigger = useCallback(() => {
    setIsScrambling(true);
  }, []);

  return { displayText, trigger, isScrambling };
};
