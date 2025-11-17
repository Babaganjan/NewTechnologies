// hooks/useModal.ts
import { useState } from 'react';

import type { ModalVariant } from '@/widgets/header/navItemModal/nav-Item.types';

type UseToggleProps = {
  initialValue?: boolean;
};

function useModal({ initialValue = false }: UseToggleProps) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  const [isMobilModalOpen, setIsMobilModalOpen] = useState(initialValue);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(initialValue);
  const [activeNavItem, setActiveNavItem] = useState<ModalVariant | null>(null);

  // Для header модалки
  const handleNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
    setIsModalOpen(true);
  };

  // Для mobile модалки
  const handleOnMobilModal = () => {
    setIsMobilModalOpen(true);
  };

  // Для consultation модалки
  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  // Закрытие всех модалок
  const handleCloseAllModals = () => {
    setIsModalOpen(false);
    setIsMobilModalOpen(false);
    setIsConsultationModalOpen(false);
    setActiveNavItem(null);
  };

  // Закрытие конкретной модалки
  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  // Для mobile навигации
  const handleMobilNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
  };

  const handleMobilNavItemLeave = () => {
    setActiveNavItem(null);
  };

  return {
    // Состояния
    isModalOpen,
    isMobilModalOpen,
    isConsultationModalOpen,
    activeNavItem,

    // Методы для header модалки
    handleNavItemEnter,
    handleCloseAllModals,

    // Методы для mobile модалки
    handleOnMobilModal,
    handleMobilNavItemEnter,
    handleMobilNavItemLeave,

    // Методы для consultation модалки
    handleOpenConsultation,
    handleCloseConsultation,
  };
}

export default useModal;
