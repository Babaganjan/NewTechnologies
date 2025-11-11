import {
  Advantage,
  ConsultationService,
  Description,
  HeroService,
  IncludedService,
  ProjectMenu,
  Questions,
  SeeAlso,
  StagesWork,
} from '@/widgets';

export const OpoveshcheniePage = () => {
  return (
    <>
      <HeroService title="Системы оповещения" type="notificationSystem" />
      <Description type="NOTIFICATION_SYSTEM" />
      <ConsultationService type="NOTIFICATION_SYSTEM" />
      <IncludedService type="notificationSystem" />
      <Advantage type="notificationSystem" />
      <StagesWork type="notificationSystem" />
      <ProjectMenu type="NOTIFICATION_SYSTEM" />
      <Questions type="notification-system" />
      <SeeAlso type="Системы оповещения" />
    </>
  );
};
