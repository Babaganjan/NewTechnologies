import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const PozhartusheniePage = () => {
  return (
    <>
      <StagesWork />
      <ProjectMenu type="fire-suppression" />
      <Questions type="fire-suppression" />
      <SeeAlso type="Системы пожаротушения" />
    </>
  );
};
