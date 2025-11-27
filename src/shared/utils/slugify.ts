export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Пробелы -> дефисы
    .replace(/[^\w\-]+/g, '') // Удалить спецсимволы (оставить буквы, цифры, дефисы)
    .replace(/\-\-+/g, '-') // Множественные дефисы -> один
    .replace(/^-+/, '') // Убрать дефисы в начале
    .replace(/-+$/, ''); // Убрать дефисы в конце
}
