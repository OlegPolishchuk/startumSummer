import { ComponentPropsWithRef, forwardRef } from 'react';

import clsx from 'clsx';

import cls from './Button.module.css';

interface Props extends ComponentPropsWithRef<'button'> {
  full?: boolean;
  size?: 'small' | 'default';
  variant?: 'primary' | 'text';
}
export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      full,
      className,
      disabled,
      onClick,
      type,
      size = 'default',
      variant = 'primary',
      ...restProps
    }: Props,
    ref,
  ) => {
    const buttonClassNames = clsx(
      cls.button,
      full && cls.full,
      size === 'small' && cls.small,
      variant === 'text' && cls.textButton,
      className && className,
    );

    return (
      <button
        className={buttonClassNames}
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
