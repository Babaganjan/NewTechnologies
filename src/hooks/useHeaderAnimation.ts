// import { useEffect, useState } from 'react';
//
// export const useHeaderAnimation = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//
//       setIsScrolled(currentScrollY > 50);
//
//       if (currentScrollY < 50) {
//         setIsVisible(true);
//
//         return;
//       }
//
//       if (currentScrollY < lastScrollY) {
//         setIsVisible(true);
//       } else if (currentScrollY > lastScrollY + 10) {
//         setIsVisible(false);
//       }
//
//       setLastScrollY(currentScrollY);
//     };
//
//     window.addEventListener('scroll', handleScroll, { passive: true });
//
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);
//
//   return { isVisible, isScrolled };
// };
