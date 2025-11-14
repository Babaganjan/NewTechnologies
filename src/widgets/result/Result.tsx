import { H } from '@/shared/ui';
import { ResultList } from '@/widgets/result/resultList/ResultList';
import './_result.scss';

import { resultData } from './result.const';

export const Result = () => {
  return (
    <section className="result with-trapezoids" aria-labelledby="Достижения-компании">
      <div className="container result__container">
        <div className="result__inner">
          <H level={'2'} className="result__title title" id="Достижения-компании">
            Наши достижения
          </H>
        </div>
        <ResultList items={resultData} />
      </div>
    </section>
  );
};
