import { ComponentPropsWithRef, ReactNode } from 'react';

import clsx from 'clsx';

import cls from './SearcInput.module.css';

import { SearchIcon } from 'shared/ui/Icons';

interface Props extends ComponentPropsWithRef<'input'> {
  // buttonCallback: (value: string) => void;
  children?: ReactNode;
}
export const SearchInput = ({
  // buttonCallback,
  className,
  disabled,
  value,
  // placeholder,
  // onChange,
  // onKeyDown,
  children,
  ...restProps
}: Props) => {
  return (
    <div className={cls.wrapper}>
      <SearchIcon width={13} height={13} />

      <input
        className={clsx(cls.input, className && className)}
        value={value}
        disabled={disabled}
        type="text"
        placeholder="Введите название вакансии"
        {...restProps}
      />

      {children}
    </div>
  );
};
