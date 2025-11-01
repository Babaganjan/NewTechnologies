import { Advantage, IncludedService, ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const OpsPage = () => {
  return (
    <>
      <IncludedService type="fireAlarm" />
      <Advantage type="fireAlarm" />
      <StagesWork type="fireAlarm" />
      <ProjectMenu type="fire-alarm" />
      <Questions type="fire-alarm" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
