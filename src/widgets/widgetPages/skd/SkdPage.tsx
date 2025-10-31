import { Advantage, ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const SkdPage = () => {
  return (
    <>
      <Advantage type="accessControl" />
      <StagesWork type="accessControl" />
      <ProjectMenu type="access-control" />
      <Questions type="access-control" />
      <SeeAlso type="Системы контроля доступом" />
    </>
  );
};
