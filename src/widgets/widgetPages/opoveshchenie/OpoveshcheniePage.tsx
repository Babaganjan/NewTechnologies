import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const OpoveshcheniePage = () => {
  return (
    <>
      <StagesWork type="notificationSystem" />
      <ProjectMenu type="notification-system" />
      <Questions type="notification-system" />
      <SeeAlso type="Системы оповещения" />
    </>
  );
};
