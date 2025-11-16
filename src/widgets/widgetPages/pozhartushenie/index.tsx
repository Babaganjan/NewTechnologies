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
  TypesOfBlock,
} from '@/widgets';

export const PozhartusheniePage = () => {
  return (
    <>
      <HeroService title="Системы пожаротушения" type="FIRE_SUPPRESSION" />
      <Description type="FIRE_SUPPRESSION" />
      <ConsultationService type="FIRE_SUPPRESSION" />
      <IncludedService type="FIRE_SUPPRESSION" />
      <Advantage type="FIRE_SUPPRESSION" />
      <TypesOfBlock type="OPS" title="Виды пожаротушения" />
      <StagesWork type="FIRE_SUPPRESSION" />
      <ProjectMenu type="FIRE_SUPPRESSION" />
      <Questions type="FIRE_SUPPRESSION" />
      <SeeAlso type="Системы пожаротушения" />
    </>
  );
};
