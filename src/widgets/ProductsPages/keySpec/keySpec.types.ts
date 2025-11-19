// types.ts
export interface SpecItem {
  id: string | number;
  title: string;
  value?: string; // Например "320", "4K"
  unit?: string; // Например "Мбит/сек", "Мас-адрес"
  description?: string;
  // Опционально: управление сеткой для конкретного элемента
  colSpan?: 1 | 2;
}

export interface KeySpecsProps {
  items: SpecItem[];
  className?: string;
}
