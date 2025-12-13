// 'use client';
// import { motion } from 'framer-motion';
//
// import { fadeInUp } from '@/shared/animations/scroll-animations';
// import { Button } from '@/shared/ui';
//
// interface TabPanelProps<T extends string> {
//   tabs: T[];
//   activeTab: T;
//   ariaLabel?: string;
//   onTabChange: (tab: T) => void;
// }
//
// export function TabPanel<T extends string>({
//   tabs,
//   ariaLabel = 'Tabs',
//   onTabChange,
//   activeTab,
// }: TabPanelProps<T>) {
//   return (
//     <motion.div
//       className="tabList-container"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeInUp}
//       role="tablist"
//       aria-label={ariaLabel}
//       aria-orientation="horizontal"
//     >
//       {tabs.map((tab) => (
//         <Button
//           key={tab}
//           variant="secondary"
//           onClick={() => onTabChange(tab)}
//           role="tab"
//           id={`tab-${tab}`}
//           active={activeTab === tab}
//           aria-selected={activeTab === tab}
//           aria-controls={`panel-${tab}`}
//           tabIndex={activeTab === tab ? 0 : -1}
//         >
//           {tab}
//         </Button>
//       ))}
//     </motion.div>
//   );
// }
