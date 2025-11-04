import {
  Advantage,
  Description,
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
      <Description type="FIRE_SUPPRESSION" />
      <IncludedService type="fireSuppression" />
      <Advantage type="fireSuppression" />
      <TypesOfBlock type="OPS" title="Виды пожаротушения" />
      <StagesWork type="fireSuppression" />
      <ProjectMenu type="FIRE_SUPPRESSION" />
      <Questions type="fire-suppression" />
      <SeeAlso type="Системы пожаротушения" />
    </>
  );
};
