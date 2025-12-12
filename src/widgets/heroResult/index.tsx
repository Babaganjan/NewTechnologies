// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// import { fadeInUp } from '@/shared/animations/scroll-animations';
// import { ResultHeading } from '@/shared/icons';
// import { H } from '@/shared/ui';
// import './_heroResult.scss';

// export const HeroResult = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: 'afterChildren',
//         staggerChildren: 0.15, // Задержка между появлением дочерних элементов
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: {
//       opacity: 0,
//       scale: 0.5,
//     },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: 0.3,
//         duration: 0.8,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <section className="hero-result" aria-labelledby="hero-result-title">
//       <motion.div
//         className="container hero-result__container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={containerVariants}
//       >
//         {/* Заголовок появляется первым */}
//         <motion.div variants={fadeInUp} className="heading-wrapper">
//           <H level={'1'} id="hero-result-title" className="result-heading">
//             <ResultHeading />
//           </H>
//         </motion.div>

//         {/* Изображение появляется после заголовка благодаря stagger */}
//         <motion.div className="wrapper-cubak" transition={{ delay: 2 }} variants={imageVariants}>
//           <Image
//             src="/img/result-cubak.webp"
//             alt="Кубак достижений"
//             width={69}
//             height={48}
//             loading="lazy"
//           />
//         </motion.div>

//         {/* Текст появляется последним */}
//         <motion.div variants={fadeInUp} className="hero-result__content">
//           <motion.p variants={fadeInUp} className="hero-result__prev">
//             Компания «Новые технологии» регулярно подтверждает высокий уровень компетенций в сфере
//             систем безопасности, получая признание на государственном, отраслевом и международном
//             уровнях.
//           </motion.p>
//         </motion.div>
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
        when: 'beforeChildren',
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Анимация для изображения - появляется после разъезжания букв
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5,
        duration: 1,
        stiffness: 100,
        damping: 15,
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
        <div className="heading-wrapper">
          <H level={'1'} id="hero-result-title" className="result-heading">
            <ResultHeading />
          </H>
        </div>

        <motion.div
          className="wrapper-cubak"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <Image
            src="/img/result-cubak.webp"
            alt="Кубак достижений"
            width={69}
            height={48}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="hero-result__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 2 }}
        >
          <p className="hero-result__prev">
            Компания «Новые технологии» регулярно подтверждает высокий уровень компетенций в сфере
            систем безопасности, получая признание на государственном, отраслевом и международном
            уровнях.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
