// contexts/ScrollProvider.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface ScrollContextType {
  isHeaderVisible: boolean;
  isHeaderScrolled: boolean;
}

const ScrollContext = createContext<ScrollContextType>({
  isHeaderVisible: true,
  isHeaderScrolled: false,
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsHeaderScrolled(currentScrollY > 50);

      if (currentScrollY < 50) {
        setIsHeaderVisible(true);

        return;
      }

      if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <ScrollContext.Provider value={{ isHeaderVisible, isHeaderScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};
