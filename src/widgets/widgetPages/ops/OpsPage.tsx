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
      <HeroService title="Охранно-пожарная сигнализация" type="FIRE_ALARM" />
      <Description type="FIRE_ALARM" />
      <ConsultationService type="FIRE_ALARM" />
      <IncludedService type="FIRE_ALARM" />
      <Advantage type="FIRE_ALARM" />
      <StagesWork type="FIRE_ALARM" />
      <ProjectMenu type="FIRE_ALARM" />
      <Questions type="FIRE_ALARM" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
