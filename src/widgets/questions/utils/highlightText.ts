import type { ReactNode } from 'react';
import React from 'react';

interface HighlightOptions {
  className?: string;
  tag?: 'strong' | 'em' | 'mark' | 'span';
}

export const highlightText = (
  text: string,
  keywords: string | string[],
  options: HighlightOptions = {}
): ReactNode => {
  const { className = 'text-underline', tag = 'strong' } = options;
  const keywordArray = Array.isArray(keywords) ? keywords : [keywords];

  // Создаем регулярку для всех ключевых слов
  const pattern = new RegExp(
    `(${keywordArray.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'gi'
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlighted = keywordArray.some(
      (keyword) => part.toLowerCase() === keyword.toLowerCase()
    );

    if (isHighlighted) {
      return React.createElement(tag, { key: index, className }, part);
    }

    return part;
  });
};
