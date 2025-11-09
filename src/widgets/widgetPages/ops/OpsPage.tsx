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

export const OpsPage = () => {
  return (
    <>
      <HeroService title="Охранно-пожарная сигнализация" type="fireAlarm" />
      <Description type="FIRE_ALARM" />
      <ConsultationService type="FIRE_ALARM" />
      <IncludedService type="fireAlarm" />
      <Advantage type="fireAlarm" />
      <StagesWork type="fireAlarm" />
      <ProjectMenu type="FIRE_ALARM" />
      <Questions type="fire-alarm" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
