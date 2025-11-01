import {
  Advantage,
  IncludedService,
  ProjectMenu,
  Questions,
  SeeAlso,
  StagesWork,
  TypesOfBlock,
} from '@/widgets';

export const SkdPage = () => {
  return (
    <>
      <IncludedService type="accessControl" />
      <Advantage type="accessControl" />
      <TypesOfBlock type="SKD" title="Варианты идентификации" />
      <StagesWork type="accessControl" />
      <ProjectMenu type="access-control" />
      <Questions type="access-control" />
      <SeeAlso type="Системы контроля доступом" />
    </>
  );
};
