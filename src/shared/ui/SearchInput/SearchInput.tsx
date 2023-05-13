import { ComponentPropsWithRef, ReactNode } from 'react';

import clsx from 'clsx';
import { Button, Input, SearchIcon } from 'ui';

import cls from './SearcInput.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  // buttonCallback: (value: string) => void;
  children?: ReactNode;
  clickCallback: (value: string) => void;
}
export const SearchInput = ({
  // buttonCallback,
  className,
  disabled,
  value,
  // placeholder,
  // onChange,
  // onKeyDown,
  clickCallback,
  ...restProps
}: Props) => {
  const handleClick = () => {
    clickCallback('');
  };

  return (
    <div className={cls.wrapper}>
      <SearchIcon className={cls.icon} width={13} height={13} />

      <Input
        className={clsx(cls.input, className && className)}
        value={value}
        disabled={disabled}
        type="text"
        placeholder="Введите название вакансии"
        {...restProps}
      />

      <Button size="small" className={cls.button} onClick={handleClick}>
        Search
      </Button>
    </div>
  );
};
