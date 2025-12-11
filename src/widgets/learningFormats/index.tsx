'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import { ButtonClickForma } from '../buttonForma';
import type { FormSchemaType } from '../forma';
import './learningFormats.scss';

export const LearningFormats = () => {
  const handleFormSubmit = async (data: Partial<FormSchemaType>) => {
    console.log('Form submitted with data:', data);
    // Здесь можно добавить отправку на сервер, например:
    // try { await api.submitForm(data); } catch (error) { console.error(error); }
  };

  return (
    <section className="learning">
      <motion.div
        className="learning__container container"
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
        <motion.div variants={fadeInUp} className="learning-title">
          <H level="2" variant="light">
            Форматы обучения
          </H>
        </motion.div>
        <div className="learning-card-wrapper">
          <motion.article variants={fadeInUp} className="learning-card">
            <div className="learning-card__title-container">
              <h3 className="learning-card__title">Для официальных партнеров</h3>
              <p className="learning-card__subtitle learning-card__subtitle--mobile">
                Обучение для наших партнеров предоставляется на <span>безвозмездной основе</span>.
              </p>
            </div>
            <p className="learning-card__subtitle learning-card__subtitle--desctop">
              Обучение для наших партнеров предоставляется на <span>безвозмездной основе</span>.
            </p>
            <div className="learning__button">
              <ButtonClickForma variant="feedback" icon onFormSubmit={handleFormSubmit} scrambler>
                Заказать услугу
              </ButtonClickForma>
            </div>
          </motion.article>
          <motion.article variants={fadeInUp} className="learning-card">
            <div className="learning-card__title-container">
              <h3 className="learning-card__title">Для специалистов и всех желающих</h3>
              <p className="learning-card__subtitle learning-card__subtitle--mobile">
                Платные программы для развития профессиональных навыков и освоения современных
                технологий безопасности
              </p>
            </div>
            <p className="learning-card__subtitle learning-card__subtitle--desctop">
              Платные программы для развития профессиональных навыков и освоения современных
              технологий безопасности.
            </p>
            <div className="learning__button">
              <ButtonClickForma variant="feedback" icon onFormSubmit={handleFormSubmit} scrambler>
                Заказать услугу
              </ButtonClickForma>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
};
