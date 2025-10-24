import './_result.scss';
import { H } from '@/shared/ui';
import { ResultList } from '@/shared/ui/resultList/ResultList';

import { resultData } from './result.const';

export const Result = () => {
  return (
    <section className="result with-trapezoids" aria-label="Достижения компании">
      <div className="container result__container flex">
        <div className="result__inner flex">
          <H level={'2'} className="result__title title" aria-label="Достижения компании">
            Наши достижения
          </H>
        </div>
        <ResultList items={resultData} />
      </div>
    </section>
  );
};
