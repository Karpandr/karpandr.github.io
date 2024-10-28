import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import s from './Button.module.sass';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className={s.root} {...props}>
      {children}
    </button>
  );
};
