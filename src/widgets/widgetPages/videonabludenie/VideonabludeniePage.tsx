import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const VideonabludeniePage = () => {
  return (
    <>
      <StagesWork />
      <ProjectMenu type="video-surveillance" />
      <Questions type="video-surveillance" />
      <SeeAlso type="Системы видеонаблюдения" />
    </>
  );
};
