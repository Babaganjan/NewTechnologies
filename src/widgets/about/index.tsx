// import Image from 'next/image';

// import { Button, H } from '@/shared/ui';

// import './_about.scss';

// export const About = () => {
//   return (
//     <section className="about" aria-labelledby="about-heading">
//       <div className="container about__container">
//         <H level={'2'} variant="light" className="about__title title" id="about-heading">
//           Что мы делаем
//         </H>

//         <H level={'3'} variant="light" className="about__subtitle subtitle">
//           <span>реализуем комплексные системы</span> безопасности и оптимизируем бизнес в казахстане{' '}
//           <span>С 2013 года</span>
//         </H>

//         <figure className="about__images">
//           <div className="about__images--top">
//             <div className="image__wrapper image__big">
//               <Image
//                 src="/img/about-1-1920.webp"
//                 alt="Система видеонаблюдения на промышленном объекте"
//                 width={340}
//                 height={254}
//                 loading="lazy"
//               />
//             </div>
//           </div>
//           <div className="about__images--bottom">
//             <div className="image__wrapper image__small-top">
//               <Image
//                 src="/img/about-2-1920.webp"
//                 alt="Купольная камера видеонаблюдения"
//                 width={168}
//                 height={134}
//                 loading="lazy"
//               />
//             </div>
//             <div className="image__wrapper image__small-bottom">
//               <Image
//                 src="/img/about-3-1920.webp"
//                 alt="Панель управления системой безопасности"
//                 width={168}
//                 height={134}
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </figure>

//         <div className="about__text-wrapper">
//           <div className="about__prevs-wrapper">
//             <p className="about__desc">
//               Мы фокусируемся на государственных, промышленных и стратегически важных объектах. А
//               также обеспечиваем защиту частных школ, жилых комплексов и частных домов.
//             </p>
//             <p className="about__desc">
//               Как лидер отрасли, мы разрабатываем и производим собственное оборудование под брендом
//               <abbr title="NTOUCH"> NTOUCH</abbr>, имеющее все необходимые сертификаты качества и
//               соответствия.
//             </p>
//           </div>

//           <Button variant="primaryLink" className="about__btn" icon href="/about">
//             О компании
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { Button, H } from '@/shared/ui';
import './_about.scss';

export const About = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="about" aria-labelledby="about-heading">
      <div className="container about__container">
        <H level={'2'} variant="light" className="about__title title" id="about-heading">
          Что мы делаем
        </H>

        <H level={'3'} variant="light" className="about__subtitle subtitle">
          <span>реализуем комплексные системы</span> безопасности и оптимизируем бизнес в казахстане{' '}
          <span>С 2013 года</span>
        </H>

        <figure className="about__images">
          <div className="about__images--top">
            <div className="image__wrapper image__big">
              {isInView ? (
                <Image
                  src="/img/about-1-1920.webp"
                  alt="Система видеонаблюдения на промышленном объекте"
                  width={340}
                  height={254}
                  loading="lazy"
                  sizes="(max-width: 768px) 340px, (max-width: 1024px) 420px, 863px"
                />
              ) : (
                <div style={{ width: 340, height: 254, backgroundColor: 'var(--bg-deep-gray)' }} />
              )}
            </div>
          </div>

          <div className="about__images--bottom">
            <div className="image__wrapper image__small-top">
              {isInView ? (
                <Image
                  src="/img/about-2-1920.webp"
                  alt="Купольная камера видеонаблюдения"
                  width={168}
                  height={134}
                  loading="lazy"
                  sizes="(max-width: 768px) 168px, (max-width: 1024px) 200px, 420px"
                />
              ) : (
                <div style={{ width: 168, height: 134, backgroundColor: 'var(--bg-deep-gray)' }} />
              )}
            </div>

            <div className="image__wrapper image__small-bottom">
              {isInView ? (
                <Image
                  src="/img/about-3-1920.webp"
                  alt="Панель управления системой безопасности"
                  width={168}
                  height={134}
                  loading="lazy"
                  sizes="(max-width: 768px) 168px, (max-width: 1024px) 200px, 420px"
                />
              ) : (
                <div style={{ width: 168, height: 134, backgroundColor: 'var(--bg-deep-gray)' }} />
              )}
            </div>
          </div>
        </figure>

        <div className="about__text-wrapper">
          <div className="about__prevs-wrapper">
            <p className="about__desc">
              Мы фокусируемся на государственных, промышленных и стратегически важных объектах. А
              также обеспечиваем защиту частных школ, жилых комплексов и частных домов.
            </p>
            <p className="about__desc">
              Как лидер отрасли, мы разрабатываем и производим собственное оборудование под брендом
              <abbr title="NTOUCH"> NTOUCH</abbr>, имеющее все необходимые сертификаты качества и
              соответствия.
            </p>
          </div>

          <Button variant="primaryLink" className="about__btn" icon href="/about">
            О компании
          </Button>
        </div>
      </div>
    </section>
  );
};
