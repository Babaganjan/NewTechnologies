import {
  Advantage,
  IncludedService,
  ProjectMenu,
  Questions,
  SeeAlso,
  StagesWork,
  TypesOfBlock,
} from '@/widgets';

export const PozhartusheniePage = () => {
  return (
    <>
      <IncludedService type="fireSuppression" />
      <Advantage type="fireSuppression" />
      <TypesOfBlock type="OPS" title="Виды пожаротушения" />
      <StagesWork type="fireSuppression" />
      <ProjectMenu type="fire-suppression" />
      <Questions type="fire-suppression" />
      <SeeAlso type="Системы пожаротушения" />
    </>
  );
};
