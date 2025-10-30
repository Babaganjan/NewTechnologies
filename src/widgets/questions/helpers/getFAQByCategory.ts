import { ALL_FAQ, QuestionItem } from '../questions.const';

export const getFAQByCategory = (category: string): QuestionItem[] => {
  return ALL_FAQ.filter((q) => q.category === category);
};
