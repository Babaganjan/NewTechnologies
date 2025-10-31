export interface IAdvantage {
  title: string;
}

export const ADVANTAGE__OPS: IAdvantage[] = [
  { title: 'Минимализация риска пожара и потерь имущества' },
  { title: 'Предотвращение проникновений, краж и взломов' },
  { title: 'Дистанционный контроль состояния объекта' },
  { title: 'Автоматическое реагирование на дым и повышение температуры' },
  { title: 'Интеграция с системами пожаротушения, контроля доступа, видеонаблюдения' },
  { title: 'Соблюдение норм и требований по пожарной безопасности законодательства рк' },
];
export const ADVANTAGE__VIDEO: IAdvantage[] = [
  { title: 'Снижение рисков краж и порчи имущества' },
  { title: 'Контроль сотрудников и посетителей' },
  { title: 'Высокое качество изображения 24/7' },
  { title: 'Фиксация событий и сбор доказательств' },
  { title: 'Полная техническая поддержка' },
  { title: 'Круглосуточный доступ к камерам через смартфон, планшет и пк' },
];

export const ADVANTAGE__NOTIFICATIONSYSTEM: IAdvantage[] = [
  { title: 'Устойчивость к перебоям электропитания' },
  { title: 'Возможность ручного и автоматического запуска системы' },
  { title: 'Своевременное оповещение персонала и посетителей' },
  { title: 'Поддержка современных цифровых технологий' },
  { title: 'Интеграция с системами опс, контроля доступаи видеонаблюдения' },
  { title: 'Соответствие всем нормам пожарной и промышленной безопасности законадельство РК' },
];

export const ADVANTAGE__SKD: IAdvantage[] = [
  { title: 'Защита от несанкционированного доступа' },
  { title: 'Контроль движения сотрудников и посетителей' },
  { title: 'Автоматизация учёта рабочего времени' },
  { title: 'Гибкость в настройках прав доступа' },
  { title: 'Использование современных технологий идентификации' },
  { title: 'Масштабируемость — от офиса до большого предприятия' },
];

export const ADVANTAGE__FIRESUPPRESSION: IAdvantage[] = [
  { title: 'Возможность автоматического и ручного запуска тушения' },
  { title: 'Соответствие всем нормам пожарной безопасности РК' },
  { title: 'Комплексная защита с интеграцией в единую систему безопасности' },
  { title: 'Индивидуальный подбор оборудования под каждый объект' },
  { title: 'Сокращение рисков ущерба имуществу и здоровью' },
  { title: 'Использование сертифицированного оборудования ведущих производителей' },
];

export type AdvantageWorkType =
  | 'notificationSystem'
  | 'accessControl'
  | 'videoSurveillance'
  | 'fireSuppression'
  | 'fireAlarm';

export const ADVANTAGEALL: Record<AdvantageWorkType, IAdvantage[]> = {
  notificationSystem: ADVANTAGE__NOTIFICATIONSYSTEM,
  accessControl: ADVANTAGE__SKD,
  videoSurveillance: ADVANTAGE__VIDEO,
  fireSuppression: ADVANTAGE__FIRESUPPRESSION,
  fireAlarm: ADVANTAGE__OPS,
};
