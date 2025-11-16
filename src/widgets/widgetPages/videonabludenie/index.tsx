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

export const VideonabludeniePage = () => {
  return (
    <>
      <HeroService title="Системы видеонаблюдения" type="VIDEO_SURVEILLANCE" />
      <Description type="VIDEO_SURVEILLANCE" />
      <ConsultationService type="VIDEO_SURVEILLANCE" />
      <IncludedService type="VIDEO_SURVEILLANCE" />
      <Advantage type="VIDEO_SURVEILLANCE" />
      <StagesWork type="VIDEO_SURVEILLANCE" />
      <ProjectMenu type="VIDEO_SURVEILLANCE" />
      <Questions type="VIDEO_SURVEILLANCE" />
      <SeeAlso type="Системы видеонаблюдения" />
    </>
  );
};
