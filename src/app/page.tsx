import { About } from '@/widgets/about/about.tsx';
import { Advertising } from '@/widgets/advertising/advertising.tsx';
import { FavoritesProject } from '@/widgets/favoritesProject/favoritesProject.tsx';
import { FeedbackMenu } from '@/widgets/feedbackMenu/feedbackMenu.tsx';
import { Hero } from '@/widgets/hero/hero.tsx';
import { ObjectLevel } from '@/widgets/objectLevel/objectLevels.tsx';
import { Products } from '@/widgets/products/products.tsx';
import { ProjectMenu } from '@/widgets/projectMenu/projectMenu.tsx';
import { Questions } from '@/widgets/questions/questions.tsx';
import { Result } from '@/widgets/result/result.tsx';
import { Services } from '@/widgets/services/services.tsx';

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
