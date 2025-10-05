export interface ProjectMenuData {
  id: number;
  subtitle: string;
  service: string;
}

export const projectMenuData: ProjectMenuData[] = [
  {
    id: 1,
    subtitle: 'Филиал «Назарбаев Интеллектуальная школа» г. Тараз, АОО «НИШ»',
    service: 'Система видеонаблюдения',
  },
  {
    id: 2,
    subtitle: 'КГУ «Аппарат акима Жамбылской области»',
    service: 'Система видеонаблюдения',
  },
  {
    id: 3,
    subtitle: 'ЖОФ АО «Казпочта»',
    service: 'Комплексная безопасность',
  },
  {
    id: 4,
    subtitle: 'ТОО «Фиркан»',
    service: 'Пожарная сигнализация',
  },
];
