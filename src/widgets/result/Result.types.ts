export interface ResultItem {
  id: string | number;
  type: 'number' | 'text' | 'mixed' | 'layout';
  number?: string;
  title: string;
  description?: string;
  variant?: 'light' | 'dark';
  className?: string;
  layout?: {
    item?: string;
    inner?: string;
    number?: string;
    title?: string;
    description?: string;
  };
}

export interface ResultListProps {
  items: ResultItem[];
}
