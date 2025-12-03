'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import { DocumentsList } from './DocumentList';
import { DocumentsTabs } from './DocumentsTabs';
import type { ActiveTab } from './documents.const';
import { DOCUMENTS_ITEMS } from './documents.const';

import './Documents.scss';

export const DocumentsBlock = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('one');

  return (
    <section className="documents-section" aria-labelledby="documents-title">
      <motion.div
        className="documents__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div variants={fadeInUp} className="documents__title-container">
          <H level="2" variant="light" id="documents-title">
            Документы
          </H>
        </motion.div>
        <DocumentsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <DocumentsList documents={DOCUMENTS_ITEMS[activeTab]} />
      </motion.div>
    </section>
  );
};
