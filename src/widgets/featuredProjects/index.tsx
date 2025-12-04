// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useGlitch } from 'react-powerglitch';

// import { fadeInUp, slideInLeft } from '@/shared/animations/scroll-animations';
// import { H } from '@/shared/ui';

// import './_favorite-project.scss';
// import type { FavoritesProjectData } from './favorite-project.const';
// import { FAVORITES_PROJECT_DATA } from './favorite-project.const';

// export const FavoritesProject = ({
//   data = FAVORITES_PROJECT_DATA,
// }: {
//   data?: FavoritesProjectData[];
// }) => {
//   const glitch1 = useGlitch({
//     playMode: 'hover',
//     hideOverflow: true,
//     shake: false,
//   });

//   const glitch2 = useGlitch({
//     playMode: 'hover',
//     hideOverflow: true,
//     shake: false,
//   });

//   const glitch3 = useGlitch({
//     playMode: 'hover',
//     hideOverflow: true,
//     shake: false,
//   });

//   const glitches = [glitch1, glitch2, glitch3];

//   return (
//     <section className="favorites-project" aria-labelledby="featured-projects-heading">
//       <motion.div
//         className="favorites-project__container container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.35, delayChildren: 0.1 },
//           },
//         }}
//       >
//         <motion.div variants={fadeInUp}>
//           <H
//             level={'2'}
//             variant="light"
//             id="featured-projects-heading"
//             className="favorites-project__title"
//           >
//             Избранные проекты
//           </H>
//         </motion.div>

//         {data.map((item, index) => {
//           const glitch = glitches[index];

//           return (
//             <article className="favorites-project__item" key={item.id}>
//               <motion.figure
//                 variants={slideInLeft}
//                 className="favorites-project__img"
//                 ref={glitch.ref}
//                 onMouseEnter={glitch.startGlitch}
//                 onMouseLeave={glitch.stopGlitch}
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={800}
//                   height={400}
//                   className="favorites-project__img-item"
//                   loading={index === 0 ? 'eager' : 'lazy'}
//                 />
//               </motion.figure>
//               <div className="favorites-project__wrapper">
//                 <h3 className="item__small-title">{item.title}</h3>
//                 <p className="item__prev">{item.description}</p>
//               </div>
//             </article>
//           );
//         })}
//       </motion.div>
//     </section>
//   );
// };

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import './_favorite-project.scss';
import type { FavoritesProjectData } from './favorite-project.const';
import { FAVORITES_PROJECT_DATA } from './favorite-project.const';

export const FavoritesProject = ({
  data = FAVORITES_PROJECT_DATA,
}: {
  data?: FavoritesProjectData[];
}) => {
  const glitch1 = useGlitch({
    playMode: 'hover',
    hideOverflow: true,
    shake: false,
  });

  const glitch2 = useGlitch({
    playMode: 'hover',
    hideOverflow: true,
    shake: false,
  });

  const glitch3 = useGlitch({
    playMode: 'hover',
    hideOverflow: true,
    shake: false,
  });

  const glitches = [glitch1, glitch2, glitch3];

  return (
    <section className="favorites-project" aria-labelledby="featured-projects-heading">
      <motion.div
        className="favorites-project__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div variants={fadeInUp}>
          <H
            level={'2'}
            variant="light"
            id="featured-projects-heading"
            className="favorites-project__title"
          >
            Избранные проекты
          </H>
        </motion.div>

        {data.map((item, index) => {
          const glitch = glitches[index];

          return (
            <motion.article
              className="favorites-project__item"
              key={item.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              <figure
                className="favorites-project__img"
                {...(glitch && { ref: glitch.ref })}
                onMouseEnter={() => glitch?.startGlitch()}
                onMouseLeave={() => glitch?.stopGlitch()}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={400}
                  className="favorites-project__img-item"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </figure>
              <div className="favorites-project__wrapper">
                <h3 className="item__small-title">{item.title}</h3>
                <p className="item__prev">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
};
