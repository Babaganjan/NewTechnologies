// 'use client';
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export const useHeaderThemeObserver = (defaultTheme: 'dark' | 'light' = 'dark') => {
//   const [observedTheme, setObservedTheme] = useState<'dark' | 'light'>(defaultTheme);
//   const pathname = usePathname(); // Отслеживаем изменения маршрута

//   useEffect(() => {
//     setObservedTheme(defaultTheme);
//     const handleIntersect = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const attributeValue = entry.target.getAttribute('data-header-theme');
//           const newTheme = (attributeValue || 'light') as 'dark' | 'light';

//           setObservedTheme(newTheme);
//           console.log('New computed theme:', newTheme);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersect, {
//       root: null,
//       rootMargin: '-60px 0px -90% 0px',
//       threshold: 0,
//     });

//     const timeoutId = setTimeout(() => {
//       const sections = document.querySelectorAll('section');

//       sections.forEach((section) => observer.observe(section));
//     }, 0);

//     return () => {
//       clearTimeout(timeoutId);
//       observer.disconnect();
//     };
//   }, [pathname, defaultTheme]);

//   return observedTheme;
// };
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useHeaderThemeObserver = (defaultTheme: 'dark' | 'light' = 'dark') => {
  const [observedTheme, setObservedTheme] = useState<'dark' | 'light'>(defaultTheme);
  const pathname = usePathname();

  useEffect(() => {
    setObservedTheme(defaultTheme);
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const attributeValue = entry.target.getAttribute('data-header-theme');
          const sectionTheme = (attributeValue || 'light') as 'dark' | 'light';

          // ИНВЕРТИРУЕМ ТЕМУ: если секция светлая -> header темный, и наоборот
          const headerTheme = sectionTheme === 'light' ? 'dark' : 'light';

          setObservedTheme(headerTheme);
          console.log('Section theme:', sectionTheme, 'Header theme:', headerTheme);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-60px 0px -90% 0px',
      threshold: 0,
    });

    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => observer.observe(section));
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [pathname, defaultTheme]);

  return observedTheme;
};
