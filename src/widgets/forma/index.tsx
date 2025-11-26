'use client';
import clsx from 'clsx';
import Link from 'next/link';
import type { FormEvent } from 'react';
import React, { useState } from 'react';

import { CloseForm } from '@/shared/icons/CloseForm/CloseForm';
import { Button, Modal } from '@/shared/ui';

import './_formConsultation.scss';

// Убираем lastName из интерфейса, так как он не используется
interface FormConsultData {
  firstName: string;
  phone: string;
  message: string;
  agree: boolean;
}

interface FormErrors {
  firstName?: string;
  phone?: string;
  message?: string;
  agree?: string;
}

interface FormConsultProps {
  className?: string;
  onSubmit?: (data: FormConsultData) => void | Promise<void>;
  onClose?: () => void;
}

export const FormaConsultation = ({ className, onSubmit, onClose }: FormConsultProps) => {
  // Инициализируем состояние с явными значениями
  const [formData, setFormData] = useState<FormConsultData>({
    firstName: '',
    phone: '',
    message: '',
    agree: false, // Явно устанавливаем false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Валидация имени - должно содержать фамилию и имя (минимум 2 слова)
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Поле обязательно для заполнения';
    }

    const words = name
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    if (words.length < 2) {
      return 'Введите имя и фамилию';
    }

    if (words.some((word) => word.length < 2)) {
      return 'Каждое слово должно содержать минимум 2 буквы';
    }

    // Проверка на кириллицу и латиницу
    const validNameRegex = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;

    if (!validNameRegex.test(name)) {
      return 'Имя может содержать только буквы и дефисы';
    }

    return undefined;
  };

  // Валидация телефона
  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'Поле обязательно для заполнения';
    }

    // Базовая проверка номера телефона
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;

    if (!phoneRegex.test(phone)) {
      return 'Введите корректный номер телефона';
    }

    // Проверка на минимальное количество цифр
    const digitsOnly = phone.replace(/\D/g, '');

    if (digitsOnly.length < 10) {
      return 'Номер слишком короткий';
    }

    return undefined;
  };

  // Валидация сообщения
  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Поле обязательно для заполнения';
    }

    if (message.trim().length < 10) {
      return 'Сообщение должно содержать минимум 10 символов';
    }

    if (message.trim().length > 500) {
      return 'Сообщение слишком длинное';
    }

    return undefined;
  };

  // Валидация согласия
  const validateAgree = (agree: boolean): string | undefined => {
    if (!agree) {
      return 'Необходимо согласие на обработку данных';
    }

    return undefined;
  };

  // Общая валидация формы
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      firstName: validateName(formData.firstName),
      phone: validatePhone(formData.phone),
      message: validateMessage(formData.message),
      agree: validateAgree(formData.agree),
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;

    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;

      setFormData((prev) => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Сбрасываем ошибку при вводе
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));

    // Валидация при потере фокуса
    if (name === 'firstName') {
      setErrors((prev) => ({ ...prev, firstName: validateName(value) }));
    } else if (name === 'phone') {
      setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
    } else if (name === 'message') {
      setErrors((prev) => ({ ...prev, message: validateMessage(value) }));
    } else if (name === 'agree' && type === 'checkbox') {
      const target = e.target as HTMLInputElement;

      setErrors((prev) => ({ ...prev, agree: validateAgree(target.checked) }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Помечаем все поля как touched
    setTouched({
      firstName: true,
      phone: true,
      message: true,
      agree: true,
    });

    // Валидация перед отправкой
    if (!validateForm()) {
      return;
    }

    console.log('Form data:', formData);

    if (onSubmit) {
      await onSubmit(formData);
    }

    // Сброс формы
    setFormData({
      firstName: '',
      phone: '',
      message: '',
      agree: false,
    });
    setErrors({});
    setTouched({});
  };

  // Функция для получения класса ошибки
  const getFieldClassName = (fieldName: keyof FormErrors): string => {
    return clsx(fieldName === 'message' ? 'consult-form__textarea' : 'consult-form__input', {
      'consult-form__input--error': touched[fieldName] && errors[fieldName],
      'consult-form__input--valid': touched[fieldName] && !errors[fieldName],
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
        {/* <div className="wrapper_bg">
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
        </div> */}
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
                  onBlur={handleBlur}
                  required
                  className={getFieldClassName('firstName')}
                  placeholder="Имя и фамилия"
                />
                {touched.firstName && errors.firstName && (
                  <span className="consult-form__error">{errors.firstName}</span>
                )}
              </label>
            </div>

            <div className="consult-form__field">
              <label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={getFieldClassName('phone')}
                  placeholder="Телефон"
                />
                {touched.phone && errors.phone && (
                  <span className="consult-form__error">{errors.phone}</span>
                )}
              </label>
            </div>

            <div className="consult-form__field">
              <label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  required
                  className={getFieldClassName('message')}
                  placeholder="Сообщение"
                />
                {touched.message && errors.message && (
                  <span className="consult-form__error">{errors.message}</span>
                )}
              </label>
            </div>
          </div>

          <div className="consult-form__checkbox-field">
            <label className="consult-form__checkbox-label">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree} // Теперь всегда будет boolean, не undefined
                onChange={handleChange}
                onBlur={handleBlur}
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
            {touched.agree && errors.agree && (
              <span className="consult-form__error consult-form__error--checkbox">
                {errors.agree}
              </span>
            )}
          </div>

          <Button
            variant="feedback"
            type="submit"
            className="consult-form__submit"
            disabled={!formData.agree || Object.values(errors).some((error) => error !== undefined)}
            icon
          >
            Подобрать решение
          </Button>
        </form>
      </div>
    </Modal>
  );
};
