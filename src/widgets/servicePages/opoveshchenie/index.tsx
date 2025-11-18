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
      <HeroService title="Системы оповещения" type="NOTIFICATION_SYSTEM" />
      <Description type="NOTIFICATION_SYSTEM" />
      <ConsultationService type="NOTIFICATION_SYSTEM" />
      <IncludedService type="NOTIFICATION_SYSTEM" />
      <Advantage type="NOTIFICATION_SYSTEM" />
      <StagesWork type="NOTIFICATION_SYSTEM" />
      <ProjectMenu type="NOTIFICATION_SYSTEM" />
      <Questions type="NOTIFICATION_SYSTEM" />
      <SeeAlso type="Системы оповещения" />
    </>
  );
};
