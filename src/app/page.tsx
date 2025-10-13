import {
  About,
  Advertising,
  FavoritesProject,
  FeedbackMenu,
  Hero,
  ObjectLevel,
  Products,
  ProjectMenu,
  Questions,
  Result,
  Services,
} from '@/widgets';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Result />
      <ObjectLevel />
      <Services />
      <Products />
      <FavoritesProject />
      <ProjectMenu />
      <Advertising />
      <Questions />
      <FeedbackMenu />
    </>
  );
}
