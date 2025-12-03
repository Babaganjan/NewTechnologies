'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Breadcrumbs } from '@/shared/ui';
import './ntouch.scss';
export const Ntouch = () => {
  return (
    <section className="ntouch">
      <Breadcrumbs />
      <motion.div
        className="ntouch__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
          },
        }}
      >
        <motion.h1 variants={fadeInUp} className="ntouch__title">
          ТОО «Новые технологии – Тараз» проводит теоретические и практические курсы, посвященные
          работе с оборудованием торговой марки NTOUCH
        </motion.h1>
        <motion.div variants={fadeInUp} className="ntouch__subtitle-container">
          <p className="ntouch__subtitle">
            Занятия проводят сертифицированные специалисты, обучение проходит по утверждённым
            программам не реже одного раза в квартал. <br />
            Мы обеспечиваем слушателей методическими материалами, практическими кейсами и доступом к
            современному оборудованию.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
