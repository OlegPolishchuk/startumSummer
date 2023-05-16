import { ComponentPropsWithRef, KeyboardEvent, ReactNode, useRef } from 'react';

import clsx from 'clsx';
import { Button, Input, SearchIcon } from 'ui';

import cls from './SearcInput.module.css';

interface Props extends ComponentPropsWithRef<'input'> {
  children?: ReactNode;
  clickCallback: (value: string) => void;
}
export const SearchInput = ({
  className,
  disabled,
  value,
  defaultValue,
  clickCallback,
  ...restProps
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const inputValue = inputRef.current!.value.trim();

    clickCallback(inputValue);

    if (!inputValue) {
      inputRef.current!.value = '';
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className={cls.wrapper}>
      <SearchIcon className={cls.icon} width={15} height={15} />

      <Input
        data-elem="search-input"
        {...restProps}
        className={clsx(cls.input, className && className)}
        ref={inputRef}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Введите название вакансии"
      />

      <Button
        size="small"
        className={cls.button}
        onClick={handleClick}
        data-elem="search-button"
      >
        Поиск
      </Button>
    </div>
  );
};
