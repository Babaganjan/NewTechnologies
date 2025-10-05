export interface QuestionItem {
  id: string;
  content: string;
  gridIndex: number;
}

export const questionsData: QuestionItem[] = [
  {
    id: 'question-1',
    content: 'С какими объектами вы работаете?',
    gridIndex: 1,
  },
  {
    id: 'question-2',
    content: 'Можно ли интегрировать системы между собой?',
    gridIndex: 2,
  },
  {
    id: 'question-3',
    content: 'Работает ли система сигнализации при отключении электричества?',
    gridIndex: 3,
  },
  {
    id: 'question-4',
    content: 'Как происходит проектирование и установка?',
    gridIndex: 4,
  },
  {
    id: 'question-5',
    content: 'Предоставляете ли вы техническое обслуживание?',
    gridIndex: 5,
  },
  {
    id: 'question-6',
    content: 'У вас есть оборудование в наличии или нужно ждать поставку?',
    gridIndex: 6,
  },
  {
    id: 'question-7',
    content: 'Работаете ли вы с государственными организациями?',
    gridIndex: 7,
  },
  {
    id: 'question-8',
    content: 'Сколько времени занимает установка систем?',
    gridIndex: 8,
  },
];

export const activeCardData = {
  id: 'active-question',
  gridIndex: 9,
};
