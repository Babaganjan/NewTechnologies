import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { Contacts, FeedbackMenu } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.contacts.title,
  description: seoConfig.contacts.description,
  keywords: seoConfig.contacts.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/contacts`,
  },
};

export default function ContactsPage() {
  return (
    <>
      <Contacts />
      <FeedbackMenu />
    </>
  );
}
