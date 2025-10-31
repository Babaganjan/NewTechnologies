import { ProjectMenu, Questions, SeeAlso, StagesWork } from '@/widgets';

export const SkdPage = () => {
  return (
    <>
      <StagesWork />
      <ProjectMenu type="access-control" />
      <Questions type="access-control" />
      <SeeAlso type="Системы контроля доступом" />
    </>
  );
};
