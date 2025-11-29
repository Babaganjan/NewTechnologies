import { FeedbackMenu, Questions, Services, ServicesHero } from '@/widgets';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <Questions />
      <FeedbackMenu theme="white" />
    </>
  );
}
