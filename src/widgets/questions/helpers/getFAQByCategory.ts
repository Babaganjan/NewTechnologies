import type { QuestionItem } from '../questions.const';
import { ALL_FAQ } from '../questions.const';

export const getFAQByCategory = (category: string): QuestionItem[] => {
  return ALL_FAQ.filter((q) => q.category === category);
};
