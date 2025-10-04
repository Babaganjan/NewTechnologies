import { About } from '@/widgets/about/about';
import { Advertising } from '@/widgets/advertising/Advertising';
import { FavoritesProject } from '@/widgets/favoritesProject/FavoritesProject';
import { FeedbackMenu } from '@/widgets/feedbackMenu/FeedbackMenu';
import { Hero } from '@/widgets/hero/hero';
import { ObjectLevel } from '@/widgets/objectLevel/ObjectLevel';
import { Products } from '@/widgets/products/Products';
import { ProjectMenu } from '@/widgets/projectMenu/ProjectMenu';
import { Questions } from '@/widgets/questions/Questions';
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
      <Advertising />
      <FavoritesProject />
      <FeedbackMenu />
      <Products />
      <ProjectMenu />
      <Questions />
    </>
  );
}
