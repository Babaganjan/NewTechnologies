import { Button } from '@/shared/ui';

interface TabPanelProps<T extends string> {
  tabs: T[];
  activeTab: T;
  ariaLabel?: string;
  onTabChange: (tab: T) => void;
}

export const TabPanel = <T extends string>({
  tabs,
  ariaLabel = 'Tabs',
  onTabChange,
  activeTab,
}: TabPanelProps<T>) => {
  return (
    <div className="tabList-container" role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant="secondary"
          onClick={() => onTabChange(tab)}
          role="tab"
          active={activeTab === tab}
          aria-selected={activeTab === tab}
          aria-controls={`${tab}-panel`}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};
