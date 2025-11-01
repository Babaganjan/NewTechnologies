import { Advantage, IncludedService, ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const OpoveshcheniePage = () => {
  return (
    <>
      <IncludedService type="notificationSystem" />
      <Advantage type="notificationSystem" />
      <StagesWork type="notificationSystem" />
      <ProjectMenu type="notification-system" />
      <Questions type="notification-system" />
      <SeeAlso type="Системы оповещения" />
    </>
  );
};
