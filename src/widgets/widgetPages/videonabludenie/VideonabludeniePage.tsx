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
      <HeroService title="Системы видеонаблюдения" type="videoSurveillance" />
      <Description type="VIDEO_SURVEILLANCE" />
      <ConsultationService type="VIDEO_SURVEILLANCE" />
      <IncludedService type="videoSurveillance" />
      <Advantage type="videoSurveillance" />
      <StagesWork type="videoSurveillance" />
      <ProjectMenu type="VIDEO_SURVEILLANCE" />
      <Questions type="video-surveillance" />
      <SeeAlso type="Системы видеонаблюдения" />
    </>
  );
};
