import type { Metadata } from 'next';

import { Contacts, FeedbackMenu } from '@/widgets';

export const metadata: Metadata = {
  title: 'Контакты — ТОО «Новые технологии – Тараз»',
  description:
    'Свяжитесь с нами для консультации: проектирование, монтаж и сервис систем безопасности. Оставьте заявку — мы ответим и подготовим индивидуальное предложение.',
  keywords: ['контакты', 'заявка', 'обращение', 'NTOUCH', 'Тараз'],
  openGraph: {
    title: 'Контакты — NTOUCH',
    description: 'Контакты для заказа услуг по системам безопасности, обучения и IT-решений.',
    url: 'https://example.com/contacts',
    images: [{ url: 'https://example.com/images/og/contacts.jpg', alt: 'Контакты NTOUCH' }],
  },
  robots: { index: true, follow: true },
};

export default function ContactsPage() {
  return (
    <>
      <Contacts />
      <FeedbackMenu />
    </>
  );
}
