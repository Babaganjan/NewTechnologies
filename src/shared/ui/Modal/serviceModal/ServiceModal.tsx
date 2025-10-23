// src/shared/ui/Modal/serviceModal/ServiceModal.tsx
'use client';
import React from 'react';

import { H } from '@/shared/ui';

import { DATA_SERVICE_MODAL } from './service.const';

import './serviceModal.scss';

export const ServiceModal = () => {
  return (
    <div className="service-modal-content">
      <div className="services-content">
        <ul className="service__modal">
          {DATA_SERVICE_MODAL.map((item, id) => (
            <li className="service__modal-item item" key={id}>
              <button className="service-button">
                <H level={'4'} variant="light" className="item__title">
                  {item.title}
                </H>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
