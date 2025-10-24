// export interface NavListModalProps {
//     id: number;
//     title: string;
//     list: string[];
// }
export interface NavListModalProps {
  id: number;
  title: string;
  list: {
    name: string;      // Название услуги
    image?: string;    // Опциональный URL картинки (если нет, картинка не отображается)
  }[];
}
