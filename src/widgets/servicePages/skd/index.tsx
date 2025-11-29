import {
  Advantage,
  ConsultationService,
  Description,
  FeedbackMenu,
  HeroService,
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
      <HeroService title="Системы контроля доступа" type="ACCESS_CONTROL" />
      <Description type="ACCESS_CONTROL" />
      <ConsultationService type="ACCESS_CONTROL" />
      <IncludedService type="ACCESS_CONTROL" />
      <Advantage type="ACCESS_CONTROL" />
      <TypesOfBlock type="SKD" title="Варианты идентификации" />
      <StagesWork type="ACCESS_CONTROL" />
      <ProjectMenu type="ACCESS_CONTROL" />
      <Questions type="ACCESS_CONTROL" />
      <SeeAlso type="Системы контроля доступом" />
      <FeedbackMenu theme="white" />
    </>
  );
};
