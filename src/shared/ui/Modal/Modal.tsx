// src/shared/ui/Modal/Modal.tsx
'use client';
import React from 'react';
import './modal.scss';

interface ModalProps {
  children?: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ children, className = '' }) => {
  return (
    <div className={`modal-overlay ${className}`}>
      <div className="modal">
        <div className="modal-body container modal__container">{children}</div>
      </div>
    </div>
  );
};
