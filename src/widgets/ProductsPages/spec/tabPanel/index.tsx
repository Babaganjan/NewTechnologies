import type { KeyboardEvent } from 'react';

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
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const tabList = event.currentTarget.parentElement;

    const extractTabId = (element: Element): T => {
      const idParts = element.id.split('-');

      return idParts.slice(1).join('-') as T;
    };

    if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
      const nextTab = event.currentTarget.nextElementSibling;

      if (nextTab) {
        (nextTab as HTMLButtonElement).focus();
        onTabChange(extractTabId(nextTab));
      } else {
        const firstElement = tabList?.firstElementChild;

        if (firstElement) {
          (firstElement as HTMLButtonElement).focus();
          onTabChange(extractTabId(firstElement));
        }
      }
    }

    if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
      const previousTab = event.currentTarget.previousElementSibling;

      if (previousTab) {
        (previousTab as HTMLButtonElement).focus();
        onTabChange(extractTabId(previousTab));
      } else {
        const lastChild = tabList?.lastElementChild;

        if (lastChild) {
          (lastChild as HTMLButtonElement).focus();
          onTabChange(extractTabId(lastChild));
        }
      }
    }
  };

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
          onKeyDown={(e) => handleKeyDown(e)}
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
