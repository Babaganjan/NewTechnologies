'use client';
import clsx from 'clsx';
import type { FormEvent } from 'react';
import React from 'react';
import { useState } from 'react';

import { Modal, H, Button } from '@/shared/ui';

import './_formConsultation.scss';
import { CloseForm } from './../../shared/icons/CloseForm/CloseForm';

interface FormConsultData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agree: boolean;
}

interface FormConsultProps {
  className?: string;
  onSubmit?: (data: FormConsultData) => void | Promise<void>;
  onClose?: () => void;
}

export const FormaConsultation = ({ className, onSubmit, onClose }: FormConsultProps) => {
  const [formData, setFormData] = useState<FormConsultData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;

      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('Пожалуйста, согласитесь на обработку персональных данных');

      return;
    }

    console.log('Form data:', formData);

    if (onSubmit) {
      await onSubmit(formData);
    }

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      agree: false,
    });
  };

  return (
    <Modal>
      <div className="consultation-modal">
        <button
          className="consultation-modal__close"
          onClick={onClose}
          aria-label="Закрыть модальное окно"
        >
          <CloseForm />
        </button>

        <form onSubmit={handleSubmit} className={clsx('consult-form', className)} noValidate>
          <H level={'3'} className="consult-form__title">
            Индивидуальная консультация по вашему вопросу
          </H>

          <div className="wrapper-data">
            <div className="consult-form__field">
              <label htmlFor="firstName" className="consult-form__label">
                Имя
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="consult-form__input"
                placeholder="Имя"
              />
            </div>

            <div className="consult-form__field">
              <label htmlFor="phone" className="consult-form__label">
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="consult-form__input"
                placeholder="Телефон"
              />
            </div>

            <div className="consult-form__field">
              <label htmlFor="message" className="consult-form__label">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="consult-form__textarea"
                placeholder="Сообщение"
              />
            </div>
          </div>

          <div className="consult-form__checkbox-field">
            <label className="consult-form__checkbox-label">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="consult-form__checkbox"
              />
              <span className="consult-form__checkbox-text">
                Нажимая на кнопку Подать заявку, вы соглашаетесь на обработку персональных данных и
                политику конфиденциальности
              </span>
            </label>
          </div>

          <Button
            variant="feedback"
            type="submit"
            className="consult-form__submit"
            disabled={!formData.agree}
            icon
          >
            Подобрать решение
          </Button>
        </form>
      </div>
    </Modal>
  );
};
