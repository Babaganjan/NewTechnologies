import { About } from '../widgets/about/About';
import { Advertising } from '../widgets/advertising/Advertising';
import { FavoritesProject } from '../widgets/favoritesProject/FavoritesProject';
import { FeedbackMenu } from '../widgets/feedbackMenu/FeedbackMenu';
import { Hero } from '../widgets/hero/Hero';
import { ObjectLevel } from '../widgets/objectLevel/ObjectLevels';
import { Products } from '../widgets/products/Products';
import { ProjectMenu } from '../widgets/projectMenu/ProjectMenu';
import { Questions } from '../widgets/questions/Questions';
import { Result } from '../widgets/result/Result';
import { Services } from '../widgets/services/Services';

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
