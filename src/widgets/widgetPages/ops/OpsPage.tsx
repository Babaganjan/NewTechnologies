import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const OpsPage = () => {
  return (
    <>
      <StagesWork type="fireAlarm" />
      <ProjectMenu type="fire-alarm" />
      <Questions type="fire-alarm" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
