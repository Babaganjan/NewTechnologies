import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const OpsPage = () => {
  return (
    <>
      <StagesWork />
      <ProjectMenu type="fire-alarm" />
      <Questions type="fire-alarm" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
