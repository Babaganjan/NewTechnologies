'use client';

import { useState } from 'react';

import { H } from '@/shared/ui';

import { specificationsLowercase, tabPanels } from './spec.const';
import './spec.scss';
import type { TabLabel } from './spec.types';
import { SpecList } from './specList';
import { TabPanel } from './tabPanel';

export const Spec = ({ title = 'Общие характеристики' }: { title?: string }) => {
  const [activeTab, setActiveTab] = useState<TabLabel>(tabPanels[0]);

  return (
    <section className="spec">
      <div className="spec__container container">
        <div className="spec__title-container">
          <H level="2" variant="light">
            {title}
          </H>
        </div>
        <TabPanel activeTab={activeTab} onTabChange={setActiveTab} tabs={tabPanels} />
        <SpecList data={specificationsLowercase[activeTab] ?? []} />
      </div>
    </section>
  );
};
