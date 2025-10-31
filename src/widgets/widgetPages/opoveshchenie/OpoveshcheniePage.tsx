import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const OpoveshcheniePage = () => {
  return (
    <>
      <StagesWork />
      <ProjectMenu type="notification-system" />
      <Questions type="notification-system" />
      <SeeAlso type="Системы оповещения" />
    </>
  );
};
