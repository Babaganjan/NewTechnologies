import {
  Advantage,
  Description,
  IncludedService,
  ProjectMenu,
  Questions,
  SeeAlso,
  StagesWork,
} from '@/widgets';

export const VideonabludeniePage = () => {
  return (
    <>
      <Description />
      <IncludedService type="videoSurveillance" />
      <Advantage type="videoSurveillance" />
      <StagesWork type="videoSurveillance" />
      <ProjectMenu type="VIDEO_SURVEILLANCE" />
      <Questions type="video-surveillance" />
      <SeeAlso type="Системы видеонаблюдения" />
    </>
  );
};
