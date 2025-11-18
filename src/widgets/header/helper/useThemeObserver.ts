'use client';
import { useEffect, useState } from 'react';

export const useHeaderThemeObserver = (defaultTheme: 'dark' | 'light' = 'dark') => {
  const [observedTheme, setObservedTheme] = useState<'dark' | 'light'>(defaultTheme);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Читаем атрибут (может быть null)
          const attributeValue = entry.target.getAttribute('data-header-theme');

          // Устанавливаем тему: если атрибут есть, берем его значение;
          // если нет — используем 'light' (белый фон).
          const newTheme = (attributeValue || 'light') as 'dark' | 'light';

          setObservedTheme(newTheme);

          // (В дебаг-режиме)
          console.log('New computed theme:', newTheme);
        }
      });
    };

    // Триггер сработает, когда секция коснется линии, отступающей на 80px от верха экрана
    // (примерная высота хедера)
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-60px 0px -90% 0px',
      threshold: 0,
    });

    // Ищем все секции, у которых есть атрибут data-header-theme
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return observedTheme;
};
