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
      value,
      onKeyDown,
      ...restProps
    }: Props,
    ref,
  ) => {
    return (
      <label className={clsx(cls.container, label && cls.gap)}>
        <span className={cls.label}>{label}</span>

        <input
          ref={ref}
          type={type}
          value={value}
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
