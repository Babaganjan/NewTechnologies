import {
  Advantage,
  ConsultationService,
  Description,
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
      <Description type="ACCESS_CONTROL" />
      <ConsultationService type="ACCESS_CONTROL" />
      <IncludedService type="accessControl" />
      <Advantage type="accessControl" />
      <TypesOfBlock type="SKD" title="Варианты идентификации" />
      <StagesWork type="accessControl" />
      <ProjectMenu type="ACCESS_CONTROL" />
      <Questions type="access-control" />
      <SeeAlso type="Системы контроля доступом" />
    </>
  );
};
