import React from 'react';
import cn from 'clsx';
import { sum } from './sum';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  onClick: () => void;
}
/**
 * Primary UI component for user interaction
 */

export const Button = ({ primary, backgroundColor, size, label, ...props }: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  const onClick = () => {
    sum(4, 5);
  };

  return (
    <button
      type="button"
      className={cn('storybook-button', `storybook-button--${size}`, mode)}
      style={{ backgroundColor: backgroundColor || 'green', marginRight: '20px' }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
