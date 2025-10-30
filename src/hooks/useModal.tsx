import { useState } from 'react';

import type { ModalVariant } from '@/widgets/header/navItemModal/nav-Item.types';

type UseToggleProps = {
  initialValue?: boolean;
};

function useModal({ initialValue = false }: UseToggleProps) {
  const [isModalOpen, setIsModalOpen] = useState(initialValue);
  const [isMobilModalOpen, setIsMobilModalOpen] = useState(initialValue);
  const [activeNavItem, setActiveNavItem] = useState<ModalVariant | null>(null);

  const handleNavItemEnter = (title: ModalVariant) => {
    setActiveNavItem(title);
    setIsModalOpen(true);
  };

  const handleOnMobilModal = () => {
    setIsMobilModalOpen(true);
  };

  const handleNavItemLeave = () => {
    setIsModalOpen(false);
    setIsMobilModalOpen(false);
    setActiveNavItem(null);
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
    activeNavItem,
    handleNavItemEnter,
    handleNavItemLeave,
    handleOnMobilModal,
    handleMobilNavItemEnter,
    handleMobilNavItemLeave,
  };
}

export default useModal;
