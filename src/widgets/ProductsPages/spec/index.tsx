'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

import useModal from '@/hooks/useModal';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import type { SpecSection } from '@/shared/types/products.types';
import { Button, H } from '@/shared/ui';
import { FormaConsultation } from '@/widgets/forma';
import './spec.scss';

import { AssemblyScheme } from './AssemblyScheme';
import { ProductSpecs } from './ProductSpecs';
import { SpecImages } from './specImages';
import { SpecList } from './specList';
import { TabPanel } from './tabPanel';

interface SpecProps {
  title?: string;
  section: SpecSection;
  button?: boolean;
  buttonTitle?: string;
}

export const Spec = ({
  title = 'Общие характеристики',
  section,
  button = false,
  buttonTitle,
}: SpecProps) => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  const [activeTab, setActiveTab] = useState(section.tabs[0]);
  const activeTabData = section.data.find((item) => item.label === activeTab);

  return (
    <>
      <section className="spec">
        <motion.div
          className="spec__container container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={fadeInUp} className="spec__title-container">
            <H level="2" variant="light">
              {title}
            </H>
          </motion.div>

          <TabPanel activeTab={activeTab} onTabChange={setActiveTab} tabs={section.tabs} />

          {activeTabData?.variant === 'text' && <SpecList data={activeTabData.item} />}
          {activeTabData?.variant === 'images' && <SpecImages data={activeTabData.item} />}
          {activeTabData?.variant === 'schema' && <AssemblyScheme items={activeTabData.item} />}
          {activeTabData?.variant === 'product' && <ProductSpecs items={activeTabData.item} />}

          {button && activeTab !== 'Развернутый вид' && (
            <div className="spec__button">
              <Button variant="feedback" icon onClick={handleOpenConsultation}>
                заказать {buttonTitle || 'камера'}
              </Button>
            </div>
          )}
        </motion.div>
      </section>
      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
