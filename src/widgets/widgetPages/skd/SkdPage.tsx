import { Advantage, ProjectMenu, Questions, SeeAlso, StagesWork, TypesOfBlock } from '@/widgets';

export const SkdPage = () => {
  return (
    <>
      <Advantage type="accessControl" />
      <TypesOfBlock type="SKD" title="Варианты идентификации" />
      <StagesWork type="accessControl" />
      <ProjectMenu type="access-control" />
      <Questions type="access-control" />
      <SeeAlso type="Системы контроля доступом" />
    </>
  );
};
