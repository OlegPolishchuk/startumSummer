import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import clsx from 'clsx';
import { Button, Input, SearchIcon } from 'ui';

import cls from './SearcInput.module.css';

import { VacanciesRequestFilterData } from 'api/types';
import { useDebounce } from 'hooks';

interface Props {
  value: string;
  clickCallback: (value: string) => void;
  setFilters: React.Dispatch<React.SetStateAction<VacanciesRequestFilterData>>;
  className?: string;
  disabled?: boolean;
}
export const SearchInput = ({
  className,
  disabled,
  value,
  setFilters,
  clickCallback,
}: Props) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce<string>(inputValue);

  const handleClick = () => {
    if (inputValue.trim()) {
      clickCallback(inputValue);

      return;
    }

    setInputValue('');
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setFilters(state => ({ ...state, keyword: debouncedValue }));
  }, [debouncedValue]);

  return (
    <div className={cls.wrapper}>
      <SearchIcon className={cls.icon} width={15} height={15} />

      <Input
        data-elem="search-input"
        className={clsx(cls.input, className && className)}
        value={inputValue}
        onChange={handleInputChange}
        disabled={disabled}
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
