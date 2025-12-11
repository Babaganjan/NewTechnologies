// 'use client';
// import type { ReactNode } from 'react';

// import useModal from '@/hooks/useModal';
// import { Button } from '@/shared/ui';

// import { FormaConsultation } from '../forma';
// interface ButtonProps {
//   className: string;
//   children: ReactNode;
// }
// export const ButtonClickForma = ({ className, children, ...props }: ButtonProps) => {
//   const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
//     initialValue: false,
//   });

//   return (
//     <>
//       <Button className={className} onClick={handleOpenConsultation}>{children}</Button>
//       {isConsultationModalOpen && (
//         <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
//       )}
//     </>
//   );
// };
'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import useModal from '@/hooks/useModal';
import { Button } from '@/shared/ui';
import type { ButtonVariant } from '@/shared/ui/Button/Button.types';
import { FormaConsultation, type FormSchemaType } from '@/widgets/forma';

interface ModalButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
  onFormSubmit: (data: Partial<FormSchemaType>) => void | Promise<void>;
  scrambler?: boolean;
}

export const ButtonClickForma = ({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  onFormSubmit,
  type = 'button',
  ...buttonProps
}: ModalButtonProps) => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  const handleButtonClick = () => {
    handleOpenConsultation();
  };

  const handleFormSubmit = async (data: FormSchemaType) => {
    try {
      await onFormSubmit(data);
      handleCloseConsultation();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Button
        variant={variant}
        onClick={handleButtonClick}
        icon={icon}
        type={type}
        className={className}
        {...buttonProps}
      >
        {children}
      </Button>

      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleFormSubmit} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
