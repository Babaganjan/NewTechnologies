'use client';
import { motion } from 'framer-motion';

// import useModal from '@/hooks/useModal';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

// import { FormaConsultation } from '../forma';

import { ButtonClickForma } from '../buttonForma';
import type { FormSchemaType } from '../forma';

import type { DescriptionTypeKey } from './description.const';
import { DESCRIPTION__DATA } from './description.const';

import './description.scss';

export const Description = ({ type }: { type: DescriptionTypeKey }) => {
  // const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
  //   initialValue: false,
  // });

  const handleFormSubmit = async (data: Partial<FormSchemaType>) => {
    console.log('Form submitted with data:', data);
    // Здесь можно добавить отправку на сервер, например:
    // try { await api.submitForm(data); } catch (error) { console.error(error); }
  };
  const data = DESCRIPTION__DATA[type];

  return (
    <>
      <section className="description">
        <motion.div
          className="description__container container"
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
          <div className="description__title-wrapper">
            <motion.div variants={fadeInUp} className="description__title">
              <H level="2">Описание</H>
            </motion.div>

            <motion.h3 variants={fadeInUp} className="description__subtitle">
              {data.highlightTitle && <span>{data.highlightTitle}</span>}
              {data.title}
            </motion.h3>
          </div>
          <div className="description__wrapper">
            <motion.div variants={fadeInUp} className="description__title-description">
              <p className="description__title-one">{data.subtitleOne}</p>
              <p className="description__title-two">{data.subtitleTwo}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="description-button-container">
              {/* <Button
                variant="description"
                icon
                className="description-button"
                onClick={handleOpenConsultation}
                scrambler
              >
                Заказать услугу
              </Button> */}
              <ButtonClickForma
                variant="description"
                icon
                className="description-button"
                onFormSubmit={handleFormSubmit}
                scrambler
              >
                Заказать услугу
              </ButtonClickForma>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )} */}
    </>
  );
};
