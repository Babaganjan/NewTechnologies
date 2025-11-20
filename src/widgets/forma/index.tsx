'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import type { FormEvent } from 'react';
import React from 'react';
import { useState } from 'react';

import { CloseForm } from '@/shared/icons/CloseForm/CloseForm';
import { Modal, Button } from '@/shared/ui';

import './_formConsultation.scss';

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
        <div className="wrapper_bg">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/img/desktop.jpg, /img/modal-form-1920.png 2x"
            />
            <Image
              src="/img/modal-form-768.png"
              alt="Описание изображения"
              className="responsive-img"
              width={360}
              height={278}
            />
          </picture>
        </div>
        <form onSubmit={handleSubmit} className={clsx('consult-form', className)} noValidate>
          <h3 className="consult-form__title">
            Индивидуальная консультация&nbsp;по&nbsp;вашему вопросу
          </h3>

          <div className="wrapper-data">
            <div className="consult-form__field">
              <label>
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="consult-form__input"
                  placeholder="Имя"
                />
              </label>
            </div>

            <div className="consult-form__field">
              <label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="consult-form__input"
                  placeholder="Телефон"
                />
              </label>
            </div>

            <div className="consult-form__field">
              <label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="consult-form__textarea"
                  placeholder="Сообщение"
                />
              </label>
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
              <span className="check-style"></span>
              <p className="consult-form__checkbox-text">
                Нажимая, я&nbsp;согласен с&nbsp;обработкой{' '}
                <Link href="/privacy" target="_blank" className="consult-form__link">
                  персональных данных
                </Link>{' '}
                и&nbsp;положением{' '}
                <Link href="/privacy" target="_blank" className="consult-form__link">
                  политики конфиденциальности
                </Link>
              </p>
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
