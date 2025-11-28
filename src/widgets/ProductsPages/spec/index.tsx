'use client';

import { useState } from 'react';

import type { SpecSection } from '@/shared/types/products.types';
import { Button, H } from '@/shared/ui';

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
  const [activeTab, setActiveTab] = useState(section.tabs[0]);
  const activeTabData = section.data.find((item) => item.label === activeTab);

  return (
    <section className="spec">
      <div className="spec__container container">
        <div className="spec__title-container">
          <H level="2" variant="light">
            {title}
          </H>
        </div>

        <TabPanel activeTab={activeTab} onTabChange={setActiveTab} tabs={section.tabs} />

        {activeTabData?.variant === 'text' && <SpecList data={activeTabData.item} />}
        {activeTabData?.variant === 'images' && <SpecImages data={activeTabData.item} />}
        {activeTabData?.variant === 'schema' && <AssemblyScheme items={activeTabData.item} />}
        {activeTabData?.variant === 'product' && <ProductSpecs items={activeTabData.item} />}

        {button && (
          <div className="spec__button">
            <Button variant="feedback" icon>
              заказать {buttonTitle || 'камера'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
