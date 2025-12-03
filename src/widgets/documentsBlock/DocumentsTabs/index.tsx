'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Button } from '@/shared/ui';

type ActiveTab = 'one' | 'two';

interface DocumentsTabsProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const DocumentsTabs = ({ activeTab, onTabChange }: DocumentsTabsProps) => {
  return (
    <motion.nav variants={fadeInUp} className="button-container" aria-label="Типы документов">
      <Button
        variant="secondary"
        onClick={() => onTabChange('one')}
        role="tab"
        active={activeTab === 'one'}
        aria-current={activeTab === 'one' ? 'page' : undefined}
      >
        Сертификаты
      </Button>
      <Button
        variant="secondary"
        onClick={() => onTabChange('two')}
        role="tab"
        active={activeTab === 'two'}
        aria-current={activeTab === 'two' ? 'page' : undefined}
      >
        Благодарственные письма
      </Button>
    </motion.nav>
  );
};
