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

  const handleNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
    setIsModalOpen(true);
  };

  const handleOnMobilModal = () => {
    setIsMobilModalOpen(true);
  };

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseAllModals = () => {
    setIsModalOpen(false);
    setIsMobilModalOpen(false);
    setIsConsultationModalOpen(false);
    setActiveNavItem(null);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  const handleMobilNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
  };

  const handleMobilNavItemLeave = () => {
    setActiveNavItem(null);
  };

  return {
    isModalOpen,
    isMobilModalOpen,
    isConsultationModalOpen,
    activeNavItem,

    handleNavItemEnter,
    handleCloseAllModals,

    handleOnMobilModal,
    handleMobilNavItemEnter,
    handleMobilNavItemLeave,

    handleOpenConsultation,
    handleCloseConsultation,
  };
}

export default useModal;
