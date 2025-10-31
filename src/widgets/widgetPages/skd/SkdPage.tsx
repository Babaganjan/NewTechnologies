import { ProjectMenu, Questions, SeeAlso } from '@/widgets';

export const SkdPage = () => {
  return (
    <>
      <ProjectMenu type="access-control" />
      <Questions type="access-control" />
      <SeeAlso type="Системы контроля доступом" />
    </>
  );
};
