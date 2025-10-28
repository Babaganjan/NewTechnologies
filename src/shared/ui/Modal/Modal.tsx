'use client';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export const Modal = ({ children, onMouseEnter, onMouseLeave, className = '' }: ModalProps) => {
  return createPortal(
    <div className={`modal-overlay ${className}`}>
      <div className="modal" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="modal-body modal__container">{children}</div>
      </div>
    </div>,
    document.body
  );
};
