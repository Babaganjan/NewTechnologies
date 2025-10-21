// src/shared/ui/Modal/serviceModal/ServiceModal.tsx
'use client';
import React from 'react';

import { H } from '@/shared/ui';

import './serviceModal.scss';

interface ServiceModalProps {
  theme?: 'light' | 'dark';
  onModal: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  theme = 'light',
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="service-modal-content"
      data-theme={theme}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="services-content">
        <ul className="service__modal">
          <li className="service__modal-item">
            <H level={'4'} variant="light">
              Системы защиты
            </H>
          </li>
          <li className="service__modal-item">
            <H level={'4'} variant="light">
              IT-решения
            </H>
          </li>
          <li className="service__modal-item">
            <H level={'4'} variant="light">
              Обучение
            </H>
          </li>
        </ul>
      </div>
    </div>
  );
};
