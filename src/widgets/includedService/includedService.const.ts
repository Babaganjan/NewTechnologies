interface includedServiceType {
  title: string;
}

export const INCLUDEDSERVICE__OPS: includedServiceType[] = [
  { title: 'Мгновенные уведомления о тревоге на телефон или пульт охраны' },
  { title: 'Современные и сертифицированные датчики и панели доступа' },
  { title: 'Защита от пожаров, задымления и несанкционированного доступа' },
  { title: 'Подробные инструкции и обучение сотрудников' },
  { title: '12-месячная Гарантия на оборудование и работы' },
  { title: 'Интеграция с системами оповещения и видеонаблюдения' },
];

export const INCLUDEDSERVICE__VIDEO: includedServiceType[] = [
  { title: 'Система видеонаблюдения под ключ — готовое решение без сбоев' },
  { title: 'Удалённый доступ — управляйте камерами с телефона или компьютера' },
  { title: 'защита от краж, контроль сотрудников, фиксация всех событий' },
  { title: 'камеры с высоким разрешением, ночным режимом и архивом' },
  { title: 'Обучение персонала и предоставление полной документации' },
  { title: 'Интеграция с системами опс, контроля доступа и видеонаблюдения' },
];

export const INCLUDEDSERVICE__NOTIFICATION: includedServiceType[] = [
  { title: 'Своевременное оповещение персонала и посетителей' },
  { title: 'Возможность ручного и автоматического управления' },
  { title: 'Соответствие нормативам пожарной и промышленной безопасности' },
  { title: 'Обучение персонала и предоставление полной документации' },
  { title: 'Быстрая передача экстренной информации' },
  { title: 'Интеграция с системами опс, контроля доступа и видеонаблюдения' },
];

export const INCLUDEDSERVICE__SKD: includedServiceType[] = [
  { title: 'Удобное разграничение прав сотрудников' },
  { title: 'Полный контроль доступа на объект' },
  { title: 'Учёт рабочего времени и автоматизация табелей' },
  { title: 'Удаленное управление системой через ПК или мобильное приложение' },
  { title: 'Подробные инструкции и обучение персонала' },
  { title: 'Интеграция с видеонаблюдением и охранно-пожарной сигнализацией' },
];

export const INCLUDEDSERVICE__FIREALARM: includedServiceType[] = [
  { title: 'Защита жизни и имущества от пожаров' },
  { title: 'Автоматическое реагирование на возгорание' },
  { title: 'Современное оборудование с высокой надёжностью' },
  { title: 'Обучение персонала и предоставление полной документации' },
  { title: 'Быстрая передача экстренной информации' },
  { title: 'Подробная документация и обучение персонала' },
];

export type IncludesType =
  | 'notificationSystem'
  | 'accessControl'
  | 'videoSurveillance'
  | 'fireSuppression'
  | 'fireAlarm';

export const INCLUDEDSERVICE__ALL: Record<IncludesType, includedServiceType[]> = {
  fireSuppression: INCLUDEDSERVICE__OPS,
  videoSurveillance: INCLUDEDSERVICE__VIDEO,
  notificationSystem: INCLUDEDSERVICE__NOTIFICATION,
  accessControl: INCLUDEDSERVICE__SKD,
  fireAlarm: INCLUDEDSERVICE__FIREALARM,
};
