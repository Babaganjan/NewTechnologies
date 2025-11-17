'use client';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Modal = ({ children, onMouseLeave }: ModalProps) => {
  return createPortal(
    <div className={`modal-overlay`} role="dialog" aria-modal="true">
      <div className="modal" onMouseLeave={onMouseLeave}>
        <div className="modal-body modal__container">{children}</div>
      </div>
    </div>,
    document.body
  );
};
