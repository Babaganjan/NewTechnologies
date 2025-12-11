'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import type { SpecSection } from '@/shared/types/products.types';
import { H } from '@/shared/ui';
import { ButtonClickForma } from '@/widgets/buttonForma';
import type { FormSchemaType } from '@/widgets/forma';
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
  const pathname = usePathname();
  const isTurnstilePage = pathname.includes('/products/turnstiles/');

  const [activeTab, setActiveTab] = useState(section.tabs[0]);
  const activeTabData = section.data.find((item) => item.label === activeTab);

  const handleFormSubmit = async (data: Partial<FormSchemaType>) => {
    console.log('Form submitted with data:', data);
    // Здесь можно добавить отправку на сервер, например:
    // try { await api.submitForm(data); } catch (error) { console.error(error); }
  };

  return (
    <section
      className={clsx(
        isTurnstilePage
          ? 'specTurnstile' // если турникет - только этот класс
          : title === 'Общие характеристики'
            ? 'spec'
            : 'specSpecifics' // если не турникет
      )}
    >
      <motion.div
        className="spec__container container"
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
            <ButtonClickForma variant="feedback" icon onFormSubmit={handleFormSubmit} scrambler>
              заказать {buttonTitle || 'камера'}
            </ButtonClickForma>
          </div>
        )}
      </motion.div>
    </section>
  );
};
