'use client';

import { AnimatedSection } from '@/shared/animations/AnimatedSection';
import { fadeInUp, staggerContainer } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';
import { ResultList } from '@/widgets/result/resultList';

import './_result.scss';
import { resultData } from './result.const';

export const Result = () => {
  return (
    <section className="result with-trapezoids" aria-labelledby="achievements-heading">
      <div className="container result__container">
        <AnimatedSection className="result__inner" variants={staggerContainer(0.15, 0.1)}>
          <AnimatedSection variants={fadeInUp}>
            <H level={'2'} className="result__title title" id="achievements-heading">
              Наши достижения
            </H>
          </AnimatedSection>
        </AnimatedSection>

        <ResultList items={resultData} />
      </div>
    </section>
  );
};
