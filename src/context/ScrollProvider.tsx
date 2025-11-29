'use client';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface ScrollContextType {
  isHeaderVisible: boolean;
  isHeaderScrolled: boolean;
  selectedCity: string;
  setSelectedCity: Dispatch<SetStateAction<string>>;
}

const ScrollContext = createContext<ScrollContextType>({
  isHeaderVisible: true,
  isHeaderScrolled: false,
  selectedCity: 'Алматы',
  setSelectedCity: () => {},
});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Алматы');

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (!ticking.current) {
      requestAnimationFrame(() => {
        setIsHeaderScrolled(currentScrollY > 50);

        if (currentScrollY < 50) {
          setIsHeaderVisible(true);
        } else if (currentScrollY < lastScrollY.current) {
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY.current + 10) {
          setIsHeaderVisible(false);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider
      value={{ isHeaderVisible, isHeaderScrolled, selectedCity, setSelectedCity }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
