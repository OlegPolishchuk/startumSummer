import React, { forwardRef } from 'react';

import clsx from 'clsx';
import Select, { SingleValue } from 'react-select';

import cls from './Select.module.css';

import { Option } from 'pages/VacanciesPage/Filters/FiltersForm/FiltersForm';

interface Props {
  label?: string;
  options: Option[];
  setState: React.Dispatch<React.SetStateAction<Option>>;
}

// @ts-ignore
export const CustomSelect = forwardRef<Select<Option>, Props>(
  ({ options, label, setState }, ref) => {
    // @ts-ignore

    const handleSelect = (option: SingleValue<Option>) => {
      setState(state => ({ ...state, ...option }));
    };

    return (
      <div className={clsx(cls.wrapper, label && cls.label)}>
        <p className={cls.label}>{label}</p>

        <Select
          ref={ref}
          placeholder="Выберете отрасль"
          options={options}
          onChange={handleSelect}
          className={cls.select}
          classNames={{
            control: state =>
              clsx(cls.select_control, state.isFocused && cls.arrowFocused),
            indicatorSeparator: () => cls.separator,
            placeholder: () => cls.placeholder,
            option: state => clsx(cls.option, state.isFocused && cls.option_active),
          }}
        />
      </div>
    );
  },
);
