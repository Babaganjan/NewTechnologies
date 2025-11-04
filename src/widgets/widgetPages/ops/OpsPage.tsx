import {
  Advantage,
  Description,
  IncludedService,
  ProjectMenu,
  Questions,
  SeeAlso,
  StagesWork,
} from '@/widgets';

export const OpsPage = () => {
  return (
    <>
      <Description />
      <IncludedService type="fireAlarm" />
      <Advantage type="fireAlarm" />
      <StagesWork type="fireAlarm" />
      <ProjectMenu type="FIRE_ALARM" />
      <Questions type="fire-alarm" />
      <SeeAlso type="Охранно-пожарная сигнализация" />
    </>
  );
};
