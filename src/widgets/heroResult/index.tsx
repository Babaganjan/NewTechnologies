// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// import { fadeInUp } from '@/shared/animations/scroll-animations';
// import { ResultHeading } from '@/shared/icons';
// import { H } from '@/shared/ui';
// import './_heroResult.scss';

// export const HeroResult = () => {
//   return (
//     <section className="hero-result" aria-labelledby="hero-result-title">
//       <motion.div
//         className="container hero-result__container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15, delayChildren: 0.1 },
//           },
//         }}
//       >
//         <motion.div variants={fadeInUp} className="heading-wrapper">
//           <H level={'1'} id="hero-result-title" className="result-heading">
//             <ResultHeading />
//           </H>
//         </motion.div>
//         <motion.div className="wrapper-cubak">
//           <Image src="/img/result-cubak.webp" alt="" width={69} height={48} loading="lazy" />
//         </motion.div>

//         <div className="hero-result__content">
//           <motion.p variants={fadeInUp} className="hero-result__prev">
//             Компания «Новые технологии» регулярно подтверждает высокий уровень компетенций в сфере
//             систем безопасности, получая признание на государственном, отраслевом и международном
//             уровнях.
//           </motion.p>
//         </div>
//       </motion.div>
//     </section>
//   );
// };
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { ResultHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_heroResult.scss';

export const HeroResult = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        when: 'afterChildren',
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="hero-result" aria-labelledby="hero-result-title">
      <motion.div
        className="container hero-result__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={fadeInUp} className="heading-wrapper">
          <H level={'1'} id="hero-result-title" className="result-heading">
            <ResultHeading />
          </H>
        </motion.div>

        {/* Картинка появляется когда lettersAnimated === true */}
        <motion.div className="wrapper-cubak" initial="hidden" variants={imageVariants}>
          <Image
            src="/img/result-cubak.webp"
            alt="Кубак достижений"
            width={69}
            height={48}
            loading="lazy"
          />
        </motion.div>

        <div className="hero-result__content">
          <motion.p variants={fadeInUp} className="hero-result__prev">
            Компания «Новые технологии» регулярно подтверждает высокий уровень компетенций в сфере
            систем безопасности, получая признание на государственном, отраслевом и международном
            уровнях.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
