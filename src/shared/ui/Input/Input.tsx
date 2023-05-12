import { ComponentPropsWithRef, forwardRef } from 'react';

import clsx from 'clsx';

import cls from './Input.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  label?: string;
}
export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      className,
      disabled,
      type,
      onChange,
      placeholder,
      onKeyDown,
      ...restProps
    }: Props,
    ref,
  ) => {
    return (
      <label className={cls.container}>
        <span className={cls.label}>{label}</span>

        <input
          ref={ref}
          type={type}
          disabled={disabled}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className={clsx(cls.input, className && className)}
          {...restProps}
        />
      </label>
    );
  },
);
Input.displayName = 'Input';
