import {
  Advantage,
  Description,
  IncludedService,
  ProjectMenu,
  Questions,
  SeeAlso,
  StagesWork,
} from '@/widgets';

export const OpoveshcheniePage = () => {
  return (
    <>
      <Description type="NOTIFICATION_SYSTEM" />
      <IncludedService type="notificationSystem" />
      <Advantage type="notificationSystem" />
      <StagesWork type="notificationSystem" />
      <ProjectMenu type="NOTIFICATION_SYSTEM" />
      <Questions type="notification-system" />
      <SeeAlso type="Системы оповещения" />
    </>
  );
};
