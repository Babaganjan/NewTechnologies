'use client';

import { useState } from 'react';

import { Button, H } from '@/shared/ui';

import './spec.scss';

import { AssemblyScheme } from './AssemblyScheme';
import { ProductSpecs } from './ProductSpecs';
import {
  DATAGENERAL,
  DATALSPECIFICATION,
  Images,
  ProductSpec,
  Scheme,
  tabPanelsGeneral,
  tabPanelsSpecification,
} from './spec.const';
import type { TabLabel } from './spec.types';
import { SpecImages } from './specImages';
import { SpecList } from './specList';
import { TabPanel } from './tabPanel';

interface SpecProps {
  title?: string;
  model: string;
  button?: boolean;
}

export const Spec = ({ title = 'Общие характеристики', model, button = false }: SpecProps) => {
  const tab = title === 'Спецификация';
  const tabs = tab ? tabPanelsSpecification : tabPanelsGeneral;
  const data = tab ? DATALSPECIFICATION : DATAGENERAL;
  const [activeTab, setActiveTab] = useState<TabLabel>(tabs[0]);

  const activeTabData = data.find((item) => item.label === activeTab);

  return (
    <section className="spec">
      <div className="spec__container container">
        <div className="spec__title-container">
          <H level="2" variant="light">
            {title}
          </H>
        </div>
        <TabPanel activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
        {activeTabData?.variant === 'text' && <SpecList data={activeTabData?.item ?? []} />}
        {activeTabData?.variant === 'images' && <SpecImages data={Images} />}
        {activeTabData?.variant === 'schema' && <AssemblyScheme items={Scheme} />}
        {activeTabData?.variant === 'product' && <ProductSpecs items={ProductSpec} />}
        {button && (
          <div className="spec__button">
            <Button variant="feedback" icon>
              заказать камеру
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
