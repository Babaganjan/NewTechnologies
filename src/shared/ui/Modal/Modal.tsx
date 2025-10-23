// src/shared/ui/Modal/Modal.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

interface ModalProps {
  children?: React.ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onMouseEnter,
  onMouseLeave,
  className = '',
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return createPortal(
    <div className={`modal-overlay ${className}`}>
      <div className="modal" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="modal-body modal__container">{children}</div>
      </div>
    </div>,
    document.body
  );
};
