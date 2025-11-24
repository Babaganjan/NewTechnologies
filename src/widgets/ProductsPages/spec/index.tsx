'use client';

import { useState } from 'react';

import { Button, H } from '@/shared/ui';

import './spec.scss';

import {
  DATAGENERAL,
  DATALSPECIFICATION,
  tabPanelsGeneral,
  tabPanelsSpecification,
} from './spec.const';
import type { TabLabel } from './spec.types';
import { SpecList } from './specList';
import { TabPanel } from './tabPanel';

export const Spec = ({
  title = 'Общие характеристики',
  model,
  button = false,
}: {
  title?: string;
  model: string;
  button?: boolean;
}) => {
  const tab = title === 'Спецификация';
  const tabs = tab ? tabPanelsSpecification : tabPanelsGeneral;
  const data = tab ? DATALSPECIFICATION : DATAGENERAL;
  const [activeTab, setActiveTab] = useState<TabLabel>(tabs[0]);

  return (
    <section className="spec">
      <div className="spec__container container">
        <div className="spec__title-container">
          <H level="2" variant="light">
            {title}
          </H>
        </div>
        <TabPanel activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />
        <SpecList data={data[activeTab] ?? []} />
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
