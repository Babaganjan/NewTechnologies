import { ProjectMenu, Questions, SeeAlso } from '@/widgets';

export const OpsPage = () => {
  return (
    <>
      <ProjectMenu type="fire-alarm" />
      <Questions type="fire-alarm" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
