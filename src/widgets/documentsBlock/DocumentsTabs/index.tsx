'use client';
import { Button } from '@/shared/ui';

type ActiveTab = 'one' | 'two';

interface DocumentsTabsProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const DocumentsTabs = ({ activeTab, onTabChange }: DocumentsTabsProps) => {
  return (
    <div className="button-container" role="tablist" aria-label="Типы документов">
      <Button
        variant="secondary"
        onClick={() => onTabChange('one')}
        role="tab"
        active={activeTab === 'one'}
        aria-selected={activeTab === 'one'}
        aria-controls="documents-panel"
      >
        Сертификаты
      </Button>
      <Button
        variant="secondary"
        onClick={() => onTabChange('two')}
        role="tab"
        active={activeTab === 'two'}
        aria-selected={activeTab === 'two'}
        aria-controls="documents-panel"
      >
        Благодарственные письма
      </Button>
    </div>
  );
};
