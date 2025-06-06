import { VARIANTS } from '@/shared/constants/variants';
import { ButtonVariant } from '@/types/button.types';
import { ButtonHTMLAttributes } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
const Button = ({ children, className, variant = "primary", onClick }: IButton) => {
  return (
    <button
      className={`${VARIANTS[variant]} py-2 px-12 rounded-lg text-white cursor-pointer leading-[1] ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
