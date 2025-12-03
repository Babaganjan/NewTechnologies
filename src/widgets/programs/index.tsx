'use client';
import { motion } from 'framer-motion';

import useModal from '@/hooks/useModal';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Button, H } from '@/shared/ui';

import { FormaConsultation } from '../forma';
import './programs.scss';

export const Programs = () => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  return (
    <>
      <section className="programs">
        <motion.div
          className="programs__container container"
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
          <motion.div variants={fadeInUp} className="programs__title-container">
            <H level="2" variant="light">
              Программы
            </H>
          </motion.div>
          <motion.article variants={fadeInUp} className="programs__card">
            <div className="programs__card-title-wrapper">
              <h3 className="programs__card-title">Безопасная среда</h3>
              <p className="programs__card-subtitle">
                Комплексное программное обеспечение для мониторинга и управления безопасностью в
                организациях любого масштаба - от школ и университетов до медицинских центров,
                офисов и промышленных предприятий.
              </p>
            </div>
            <div className="programs__card-wrapper">
              <span>Функционал системы:</span>
              <ul className="programs__card-list">
                <li>Контроль доступа в здания, учебные корпуса и служебные помещения;</li>
                <li>Интеграция с системами видеонаблюдения, пожарной и охранной сигнализацией;</li>
                <li>Система оповещения и автоматической фиксации инцидентов;</li>
                <li>Централизованный мониторинг всех объектов на одной платформе;</li>
              </ul>
            </div>
            <Button
              onClick={handleOpenConsultation}
              variant="feedback"
              icon
              className="programs__button"
              scrambler
            >
              Заказать услугу
            </Button>
          </motion.article>
          <motion.article variants={fadeInUp} className="programs__card">
            <div className="programs__card-title-wrapper">
              <h3 className="programs__card-title">Антибуллинг</h3>
              <p className="programs__card-subtitle">
                Инновационная программа, направленная на профилактику конфликтов, буллинга и
                агрессивного поведения в коллективах. Подходит для учебных заведений, детских садов,
                колледжей и корпоративных организаций.
              </p>
            </div>
            <div className="programs__card-wrapper">
              <span>Функционал системы:</span>
              <ul className="programs__card-list">
                <li>
                  Анонимные обращения учеников, сотрудников или родителей о случаях травли, угроз
                  или нарушений;
                </li>
                <li>Сбор и анализ данных для администрации или HR-отдела;</li>
                <li>
                  Автоматическое формирование отчетов и рекомендаций по предотвращению конфликтов;
                </li>
                <li>Интеграция с системами внутренней безопасности и корпоративными порталами.</li>
              </ul>
            </div>
            <Button
              onClick={handleOpenConsultation}
              variant="feedback"
              icon
              className="programs__button"
              scrambler
            >
              Заказать услугу
            </Button>
          </motion.article>
        </motion.div>
      </section>
      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
