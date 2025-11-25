// layout1 - Камеры / ВидеоРегистраторы layout3- Коммутаторы шкафы layout2-Турникет
export interface SpecItem {
  id: string | number;
  title?: string;
  value?: string; // Например "320", "4K"
  unit?: string; // Например "Мбит/сек", "Мас-адрес"
  description?: string;
  subtitle?: string;
  type?: 'big' | 'subtitle' | 'singleValue' | 'titleEmpty' | 'titleNone';
}

export interface KeySpecsProps {
  title?: string;
  type: string;
}
