import { About } from '@/widgets/about/about';
import { Advertising } from '@/widgets/advertising/advertising';
import { FavoritesProject } from '@/widgets/favoritesProject/favoritesProject';
import { FeedbackMenu } from '@/widgets/feedbackMenu/feedbackMenu';
import { Hero } from '@/widgets/hero/hero';
import { ObjectLevel } from '@/widgets/objectLevel/objectLevels';
import { Products } from '@/widgets/products/products';
import { ProjectMenu } from '@/widgets/projectMenu/projectMenu';
import { Questions } from '@/widgets/questions/questions';
import { Result } from '@/widgets/result/result';
import { Services } from '@/widgets/services/services';

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
