import { Button } from '@/shared/ui';

interface TabPanelProps<T extends string> {
  tabs: T[];
  activeTab: T;
  ariaLabel?: string;
  onTabChange: (tab: T) => void;
}

export function TabPanel<T extends string>({
  tabs,
  ariaLabel = 'Tabs',
  onTabChange,
  activeTab,
}: TabPanelProps<T>) {
  return (
    <div
      className="tabList-container"
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation="horizontal"
    >
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant="secondary"
          onClick={() => onTabChange(tab)}
          role="tab"
          id={`tab-${tab}`}
          active={activeTab === tab}
          aria-selected={activeTab === tab}
          aria-controls={`panel-${tab}`}
          tabIndex={activeTab === tab ? 0 : -1}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
}
