'use client';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: ReactNode;
  onMouseLeave?: () => void;
}

export const Modal = ({ children, onMouseLeave }: ModalProps) => {
  return createPortal(
    <div className={`modal-overlay`}>
      <div className="modal" onMouseLeave={onMouseLeave}>
        <div className="modal-body modal__container">{children}</div>
      </div>
    </div>,
    document.body
  );
};
