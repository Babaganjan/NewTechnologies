'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { CloseForm } from '@/shared/icons/CloseForm/CloseForm';
import { Button } from '@/shared/ui';

import './_formConsultation.scss';

interface FormConsultProps {
  className?: string;
  onSubmit?: (data: FormSchemaType) => void | Promise<void>;
  onClose?: () => void;
}

const Modal = dynamic(() => import('@/shared/ui').then((mod) => mod.Modal), {
  ssr: false,
});

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, { error: 'Введите имя и фамилию' })
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s\-]+$/, 'Имя может содержать только буквы и дефисы')
    .refine(
      (val) => {
        const words = val
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0);

        return words.length >= 2;
      },
      {
        message: 'Введите имя и фамилию',
      }
    )
    .refine(
      (val) => {
        const words = val
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0);

        return words.every((word) => word.length >= 2);
      },
      {
        message: 'Каждое слово должно содержать минимум 2 буквы',
      }
    ),

  phone: z
    .string()
    .min(1, 'Введите номер телефона')
    .regex(/^[\+]?[0-9\s\-\(\)]{10,}$/, 'Введите корректный номер телефона')
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, '');

        return digitsOnly.length >= 10;
      },
      {
        message: 'Номер слишком короткий',
      }
    ),

  message: z
    .string()
    .min(1, 'Введите сообщение')
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(500, 'Сообщение слишком длинное'),

  agree: z.boolean().refine((val) => val === true, {
    message: 'Необходимо согласие на обработку данных',
  }),
});

// Тип из схемы
type FormSchemaType = z.infer<typeof formSchema>;

export const FormaConsultation = ({ className, onSubmit, onClose }: FormConsultProps) => {
  // Используем React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting, isValid },
    reset,
    getValues,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  // Кастомный обработчик отправки с преобразованием типов
  const onFormSubmit = async (data: FormSchemaType) => {
    if (onSubmit) {
      await onSubmit(data);
    }

    reset();
  };

  // Функция для получения класса поля
  const getFieldClassName = (fieldName: keyof FormSchemaType): string => {
    const isError = errors[fieldName];
    const isTouched = touchedFields[fieldName];
    const isMessageField = fieldName === 'message';

    return clsx(isMessageField ? 'consult-form__textarea' : 'consult-form__input', {
      'consult-form__input--error': isTouched && isError,
      'consult-form__input--valid': isTouched && !isError,
    });
  };

  // Проверяем, можно ли отправить форму
  const canSubmit = isValid && getValues('agree');

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
          <Image
            src="/img/modalForm.webp"
            alt=""
            className="responsive-img"
            width={360}
            height={278}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className={clsx('consult-form', className)}
          noValidate
        >
          <h3 className="consult-form__title">
            Индивидуальная консультация&nbsp;по&nbsp;вашему вопросу
          </h3>

          <div className="wrapper-data">
            {/* Поле имени */}
            <div className="consult-form__field">
              <label>
                <input
                  {...register('firstName')}
                  type="text"
                  className={getFieldClassName('firstName')}
                  placeholder="Имя и фамилия"
                />
                {errors.firstName && touchedFields.firstName && (
                  <span className="consult-form__error">{errors.firstName.message}</span>
                )}
              </label>
            </div>

            {/* Поле телефона */}
            <div className="consult-form__field">
              <label>
                <input
                  {...register('phone')}
                  type="tel"
                  className={getFieldClassName('phone')}
                  placeholder="Телефон"
                />
                {errors.phone && touchedFields.phone && (
                  <span className="consult-form__error">{errors.phone.message}</span>
                )}
              </label>
            </div>

            {/* Поле сообщения */}
            <div className="consult-form__field">
              <label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className={getFieldClassName('message')}
                  placeholder="Сообщение"
                />
                {errors.message && touchedFields.message && (
                  <span className="consult-form__error">{errors.message.message}</span>
                )}
              </label>
            </div>
          </div>

          {/* Чекбокс согласия */}
          <div className="consult-form__checkbox-field">
            <label className="consult-form__checkbox-label">
              <input {...register('agree')} type="checkbox" className="consult-form__checkbox" />
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
              {errors.agree && touchedFields.agree && (
                <span className="consult-form__error">{errors.agree.message}</span>
              )}
            </label>
          </div>

          {/* Кнопка отправки */}
          <Button
            variant="feedback"
            type="submit"
            className="consult-form__submit"
            disabled={!canSubmit || isSubmitting}
            icon
          >
            {isSubmitting ? 'Отправка...' : 'Подобрать решение'}
          </Button>
        </form>
      </div>
    </Modal>
  );
};
